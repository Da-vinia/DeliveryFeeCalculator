import React  from "react";

interface NumberInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  placeholder: string;
  min: number;
  max: number;
  step?: number;
  "data-test-id": string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  min,
  max,
 step = 1,
  "data-test-id": deliveryDistance,
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
    <input
      id={id}
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      min={min}
      max={max}
      data-test-id={deliveryDistance}
    />
  );
};

export default NumberInput;
