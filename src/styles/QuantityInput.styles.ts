import { styled } from '@mui/system';
  
export const QuantityInputWrapper = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
`;
  
export const StyledInput = styled('input')`
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: #000; 
    background: #fff;
    border: 1px solid rgba(0, 157, 224, 0.64);
    border-radius: 4px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: rgba(0, 157, 224, 0.14); 
    }
  
    &:focus {
      border-color: #00c2e8;
      box-shadow: 0 0 0 3px rgba(0, 127, 255, 0.2);
    }
  
    &:focus-visible {
      outline: 0;
    }
  `;
  
export  const StyledButton = styled('button')`
    font-size: 1rem;
    box-sizing: border-box;
    line-height: 1.5;
    border:  1px solid rgba(0, 157, 224, 0.64);
    border-radius: 4px;
    background: #f8f8f8;
    color: #000;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
  
    &:hover {
      background:rgba(0, 157, 224, 0.14); 
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `;