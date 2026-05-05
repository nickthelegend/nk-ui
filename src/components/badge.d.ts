import { ViewStyle } from 'react-native';
type BadgeVariant = 'default' | 'success' | 'destructive' | 'warning' | 'info' | 'outline';
interface BadgeProps {
    label: string;
    variant?: BadgeVariant;
    style?: ViewStyle;
    dot?: boolean;
}
export declare function Badge({ label, variant, style, dot }: BadgeProps): any;
export {};
//# sourceMappingURL=badge.d.ts.map