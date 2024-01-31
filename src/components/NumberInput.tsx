import React  from "react";

interface DistanceInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  placeholder: string;
  min: number;
  max: number;
  step?: number;
  "data-test-id": string;
  infoText: string;
}

const DistanceInput: React.FC<DistanceInputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  min,
  max,
  step = 1,
  "data-test-id": deliveryDistance,
  infoText,
}) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
    
        const normalizedValue = inputValue.replace(",", ".");

        const newValue = parseFloat(normalizedValue);
    
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
          onChange(newValue);
        }
      };
 
  return (
    <>
      <input
        id={id}
        type="number"
        value={value === 0 ? '' : value}
        onChange={handleInputChange}
        placeholder={value === 0 ? placeholder : ''}
        min={min}
        max={max}
        data-test-id={deliveryDistance}
      />
      <span style={{ fontSize: '10px', color: '#888' }}>{infoText}</span>
    </>
  );
};

export default DistanceInput;
