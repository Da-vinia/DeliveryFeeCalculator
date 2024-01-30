import React, { useState } from "react";
import '../styles/DeliveryFeeCalculator.css';
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import QuantityInput from "../components/QuantityInput";
// import DistanceInput from "../components/DistanceInput";
import NumberInput from "../components/NumberInput";


const DeliveryFeeCalculator: React.FC = () => {
    const [cartValue, setCartValue] = useState<number>(0);
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
    const [numItems, setNumItems] = useState<number>(0);
    const [orderTime, setOrderTime] = useState<Date>(new Date());
    const [calculatedFee, setCalculatedFee] = useState<number | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState<string | undefined >(undefined);

    const handleInputChange = (inputType: string, value: number) => {
        if (value >= 0) {
            switch (inputType) {
                case 'cartValue':
                    setCartValue(value as number);
                    break;
                // case 'deliveryDistance':
                //     setDeliveryDistance(value as number);
                //     break;
                case 'numItems':
                    setNumItems(value as number);
                    break;
                // case 'orderTime':
                //     setOrderTime(value as Date);
                //     break;
                default:
                    break;
            }
        }
    };
    
    const handleDistanceInputChange = (value: number) => {
        if (!isNaN(value) && value >= 0) {
          setDeliveryDistance(value);
        }
      };
   

    // const handleCartValueChange = (value: string | undefined) => {
    //     const detectedSeparator = value?.includes(',') ? ',' : value?.includes('.') ? '.' : ',';
    //     const numericValue = parseFloat((value || '').replace(detectedSeparator === ',' ? '.' : ',', '')) || 0;
    //     setCartValue(numericValue);
    //   };
      

    const handleDateChange = (date: Date | null) => {
        if(date) {
            setOrderTime(date);
        }
    }

    const calculateDeliveryFee = () => {
        if (cartValue <= 0 || deliveryDistance <= 0 || numItems <= 0) {
            setCalculatedFee(undefined);
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        let fee = 2;

        const additionalDistanceFee = Math.ceil((deliveryDistance - 1000) / 500) * 1;
        fee += Math.max(1, additionalDistanceFee);

        const itemsSurcharge = Math.max(0, numItems - 4) * 0.5;
        fee += itemsSurcharge;

        const bulkFee = numItems > 12 ? 1.2 : 0;
        fee += bulkFee;

        const smallOrderSurcharge = Math.max(0, 10 - cartValue);
        fee += smallOrderSurcharge;

        if(cartValue === 200) {
            fee = 0;
        }

        fee = Math.min(fee, 15);

        const fridayRush = orderTime.getDay() === 5 && orderTime.getHours() >= 15 && orderTime.getHours() < 19;
        fee = fridayRush ? Math.min(fee * 1.2, 15) : fee;

        setCalculatedFee(fee);
        setErrorMessage(undefined);
    }


    return (
    <div className="mainContainer">
        <div className="calculatorContainer">
            <h1>Delivery Fee Calculator</h1>
            <p>Discover the exact cost of your delightful delivery. 
               <br /> Enter your details and enjoy a surprise-free experience!</p>
            <div className="inputsContainer">
                <div className="inputPair">
                    <label>Cart items</label>
                        <QuantityInput onValueChange={(value) => handleInputChange('numItems', value)} />
                </div>
                <div className="inputPair">
                    <label>Cart value</label>
                    <CurrencyInput
                        id="cartValue"
                        name="cartValue"
                        placeholder="€0.00"
                        decimalsLimit={2}
                        prefix="€"
                        decimalSeparator="."
                        onValueChange={(value, name, values) => handleInputChange('cartValue', parseFloat(value || '0'))}
                        data-test-id="cartValue"
                    />
                </div>
                <div className="inputPair">
                    <label>Delivery distance (meters)</label>
                    {/* <input 
                        type="number"
                        //placeholder="enter delivery distance"
                        value={deliveryDistance} 
                        onChange={(e) => handleInputChange('deliveryDistance', parseInt(e.target.value, 10))}
                        data-test-id="deliveryDistance"
                    /> */}

                    {/* <DistanceInput
                        placeholder="enter delivery distance"
                        value={deliveryDistance}
                        onChange={(event, value) => handleInputChange('deliveryDistance', value || 0)}
                        data-test-id="deliveryDistance"
                        // onChange={handleInputChange}
                    /> */}
                    
                    <NumberInput
                        id="distanceInput"                     
                        onChange={handleDistanceInputChange}  
                        value={deliveryDistance}        
                        placeholder="Enter delivery distance"       
                        min={0}                         
                        max={1000000}
                        step={0.1}                      
                        data-test-id="deliveryDistance"               
                    />
                </div>
                <div className="inputPair">
                    <label>Order time</label>
                    <DatePicker 
                        selected= {orderTime}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeIntervals={15}
                        placeholderText="Select order time"
                        className="custom-datepicker"
                        data-test-id="orderTime"
                    />
                </div>
            </div>
            <button className="calculateBtn" onClick={calculateDeliveryFee} data-test-id="calculateButton">
                Calculate fee
            </button>
         
            <div className="resultContainer" data-test-id="fee">
                {errorMessage ? (
                    <div className="error">
                        {errorMessage}
                    </div>
                ) : (
                    calculatedFee !== undefined ? (
                        <CircularProgressbar
                            value={calculatedFee <= 15 ? calculatedFee : 15} 
                            maxValue={15}
                            text={`${calculatedFee.toFixed(2)}€`}
                            styles={buildStyles({
                                pathColor: '#00c2e8', 
                                textColor: '#00c2e8', 
                                trailColor: 'transparent', 
                                textSize: '1rem', 
                                pathTransitionDuration: 0.001,
                    })}
                    />
                ) : ( null
                )
            )}
            </div>
        </div>
    </div>
    )
}

export default DeliveryFeeCalculator;

