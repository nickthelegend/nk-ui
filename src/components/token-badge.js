"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBadge = TokenBadge;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/token-badge.tsx — Crypto token pill (USDC, SOL, ETH, etc.)
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const TOKEN_COLORS = {
    USDC: '#2775CA',
    SOL: '#9945FF',
    ETH: '#627EEA',
    BTC: '#F7931A',
    USDT: '#26A17B',
};
function TokenBadge({ token, showChevron = false, onPress, balance, style }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const tokenColor = TOKEN_COLORS[token] ?? C.primary;
    const content = ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.container, { backgroundColor: C.surface, borderColor: C.border }, style], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.dot, { backgroundColor: tokenColor }] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.label, { color: C.foreground }], children: token }), showChevron && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.chevron, { color: C.textMuted }], children: "\u25BE" }))] }));
    if (onPress) {
        return (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onPress, activeOpacity: 0.75, children: content });
    }
    return content;
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        gap: 6,
    },
    dot: { width: 8, height: 8, borderRadius: 4 },
    label: { fontSize: 14, fontWeight: '600' },
    chevron: { fontSize: 12, marginLeft: 2 },
});
//# sourceMappingURL=token-badge.js.map