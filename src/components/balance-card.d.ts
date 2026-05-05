import { ViewStyle } from 'react-native';
interface BalanceCardProps {
    balance: string;
    localBalance?: string;
    tokenBalance?: string;
    token?: string;
    onSend?: () => void;
    onReceive?: () => void;
    onTokenPress?: () => void;
    showBalance?: boolean;
    onToggleBalance?: () => void;
    username?: string;
    style?: ViewStyle;
}
export declare function BalanceCard({ balance, localBalance, tokenBalance, token, onSend, onReceive, onTokenPress, showBalance, onToggleBalance, username, style, }: BalanceCardProps): any;
export {};
//# sourceMappingURL=balance-card.d.ts.map