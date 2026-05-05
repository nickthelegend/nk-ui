import { ViewStyle } from 'react-native';
interface ReceiptRow {
    label: string;
    value: string;
    icon?: string;
}
interface ReceiptCardProps {
    status: 'success' | 'pending' | 'failed';
    title?: string;
    amount: string;
    amountSub?: string;
    rows: ReceiptRow[];
    onDone?: () => void;
    onShare?: () => void;
    style?: ViewStyle;
}
export declare function ReceiptCard({ status, title, amount, amountSub, rows, onDone, onShare, style, }: ReceiptCardProps): any;
export {};
//# sourceMappingURL=receipt-card.d.ts.map