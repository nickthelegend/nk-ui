import { ViewStyle } from 'react-native';
interface Service {
    id: string;
    label: string;
    icon: string;
    onPress?: () => void;
    badge?: string;
}
interface ServiceGridProps {
    services: Service[];
    columns?: number;
    style?: ViewStyle;
}
export declare function ServiceGrid({ services, columns, style }: ServiceGridProps): any;
export {};
//# sourceMappingURL=service-grid.d.ts.map