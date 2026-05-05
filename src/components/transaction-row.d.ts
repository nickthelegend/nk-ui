import { ViewStyle } from 'react-native';
type TxType = 'send' | 'receive' | 'swap' | 'bill' | 'other';
interface TransactionRowProps {
    type: TxType;
    title: string;
    subtitle?: string;
    amount: string;
    amountColor?: 'positive' | 'negative' | 'neutral';
    timestamp?: string;
    status?: 'success' | 'pending' | 'failed';
    onPress?: () => void;
    style?: ViewStyle;
}
export declare function TransactionRow({ type, title, subtitle, amount, amountColor, timestamp, status, onPress, style, }: TransactionRowProps): any;
export {};
//# sourceMappingURL=transaction-row.d.ts.map