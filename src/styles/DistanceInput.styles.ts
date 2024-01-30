import { styled } from '@mui/system';
import { numberInputClasses } from '@mui/base/Unstable_NumberInput';

export const StyledInputRoot = styled('div')`
  width: 100%;
  font-weight: 400;
  border-radius: 4px;
  color: grey;
  background: '#fff';
  border: 1px solid rgba(0, 157, 224, 0.64);
  display: grid; 
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  

  &.${numberInputClasses.focused} {
    border-color: rgba(0, 157, 224, 0.64);
  }

  &:hover {
    border-color: rgba(0, 157, 224, 0.64);
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
  `;
  export const StyledInputElement = styled('input')`
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: #000;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
  `;

  export const StyledButton = styled('button')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: rgba(0, 157, 224, 0.64);
  border: 0;
  color: rgba(0, 157, 224, 0.64);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: rgba(0, 157, 224, 0.14);
    border-color: rgba(0, 157, 224, 0.64);
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid rgba(0, 157, 224, 0.64);
    border-bottom: 0;
    &:hover {
      cursor: pointer;
      background: rgba(0, 157, 224, 0.14);
      color: grey};
    }

  border-color: rgba(0, 157, 224, 0.64);
  background: #fff;
  color: #000;
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    &:hover {
      cursor: pointer;
      background: rgba(0, 157, 224, 0.14);
      color: grey;
    }

  border-color:  rgba(0, 157, 224, 0.64);
  background: #fff;
  color: #000;
  }
  & .arrow {
    transform: translateY(-1px);
  }
  `;