import React from 'react';
import { Unstable_NumberInput as BaseNumberInput, NumberInputProps } from '@mui/base/Unstable_NumberInput';
import { StyledInputRoot, StyledInputElement, StyledButton } from '../styles/DistanceInput.styles';

interface DistanceInputProps extends NumberInputProps<'div'> {
  'data-test-id'?: string;
}

const DistanceInput: React.FC<DistanceInputProps> = React.forwardRef(
    ({ 'data-test-id': dataTestId, ...props }, ref: React.ForwardedRef<HTMLDivElement>) => {
   

      return (
        <BaseNumberInput
          slots={{
            root: StyledInputRoot,
            input: StyledInputElement,
            incrementButton: StyledButton,
            decrementButton: StyledButton,
          }}
          slotProps={{
            incrementButton: {
              children: '▴',
            },
            decrementButton: {
              children: '▾',
            },
          }}
          {...props}
          ref={ref}
          data-test-id={dataTestId}
        />
      );
    },
  );
  
  export default DistanceInput;
