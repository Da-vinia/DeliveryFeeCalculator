import React, { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { QuantityInputProps } from './types';
import { QuantityInputWrapper, StyledInput, StyledButton } from '../styles/QuantityInput.styles';

const QuantityInput: FC<QuantityInputProps> = ({ ariaLabel = 'Quantity Input', min = 1, max = 99, onValueChange }) => {
  const [quantity, setQuantity] = useState<number>(min);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      onValueChange && onValueChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      onValueChange && onValueChange(quantity - 1);
    }
  };

  return (
    <QuantityInputWrapper data-test-id="numItems">
      <StyledButton onClick={handleDecrement}>
        <RemoveIcon fontSize="small" />
      </StyledButton>
      <StyledInput aria-label={ariaLabel} min={min} max={max} value={quantity} readOnly />
      <StyledButton className="increment" onClick={handleIncrement}>
        <AddIcon fontSize="small" />
      </StyledButton>
    </QuantityInputWrapper>
  );
};

export default QuantityInput;
