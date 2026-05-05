import React from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightElement?: React.ReactNode;
    containerStyle?: ViewStyle;
}
export declare function Input({ label, error, hint, leftIcon, rightElement, containerStyle, style, ...props }: InputProps): any;
export {};
//# sourceMappingURL=input.d.ts.map