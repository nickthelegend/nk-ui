import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
type Variant = 'default' | 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'success';
type Size = 'sm' | 'md' | 'lg' | 'icon';
interface ButtonProps {
    children?: React.ReactNode;
    onPress?: () => void;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare function Button({ children, onPress, variant, size, disabled, loading, fullWidth, style, textStyle, leftIcon, rightIcon, }: ButtonProps): any;
export {};
//# sourceMappingURL=button.d.ts.map