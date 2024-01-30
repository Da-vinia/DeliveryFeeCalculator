export interface QuantityInputProps {
    ariaLabel?: string;
    min?: number;
    max?: number;
    onValueChange?: (value: number) => void;
}