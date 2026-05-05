import { ViewStyle } from 'react-native';
type Token = 'USDC' | 'SOL' | 'ETH' | 'BTC' | 'USDT' | string;
interface TokenBadgeProps {
    token: Token;
    showChevron?: boolean;
    onPress?: () => void;
    balance?: string;
    style?: ViewStyle;
}
export declare function TokenBadge({ token, showChevron, onPress, balance, style }: TokenBadgeProps): any;
export {};
//# sourceMappingURL=token-badge.d.ts.map