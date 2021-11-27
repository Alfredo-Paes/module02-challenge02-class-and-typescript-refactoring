import { IconBaseProps } from "react-icons/lib";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

export interface IInputStyles {
    readonly isFocused: boolean;
    readonly isFilled: boolean;
}