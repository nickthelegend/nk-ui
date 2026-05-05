"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceCard = BalanceCard;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/balance-card.tsx — Airbills-style "$4,067" balance card
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const expo_linear_gradient_1 = require("expo-linear-gradient");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
function BalanceCard({ balance, localBalance, tokenBalance, token = 'USDC', onSend, onReceive, onTokenPress, showBalance = true, onToggleBalance, username, style, }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.card, { backgroundColor: C.card, borderColor: C.border }, style], children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.topRow, children: [username ? ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: [styles.usernamePill, { backgroundColor: C.surface }], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.avatar, { backgroundColor: C.primary }] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.usernameText, { color: C.textMuted }], children: username })] })) : (0, jsx_runtime_1.jsx)(react_native_1.View, {}), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onTokenPress, style: [styles.tokenPill, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.tokenDot, { backgroundColor: C.usdc ?? C.primary }] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.tokenText, { color: C.foreground }], children: token }), tokenBalance && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.tokenBalance, { color: C.textMuted }], children: tokenBalance })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 10 }, children: "\u25BE" })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.balanceSection, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.balanceLabel, { color: C.textMuted }], children: "Balance" }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onToggleBalance, style: styles.balanceRow, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.balanceMain, { color: C.foreground }], children: showBalance ? balance : '••••••' }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 16, marginLeft: 8 }, children: showBalance ? '◉' : '◎' })] }), localBalance && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: [styles.balanceSub, { color: C.textMuted }], children: ["\u2248 ", localBalance] }))] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.actions, children: [(0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onSend, style: [styles.actionBtn, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.actionIcon, { color: C.foreground }], children: "\u2197" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.actionLabel, { color: C.textMuted }], children: "Send" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onReceive, style: [styles.actionBtn, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.actionIcon, { color: C.foreground }], children: "\u2199" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.actionLabel, { color: C.textMuted }], children: "Receive" })] })] })] }));
}
const styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: globals_1.BORDER_RADIUS,
        padding: 20,
        borderWidth: 1,
        gap: 16,
    },
    topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    usernamePill: {
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 10, paddingVertical: 6,
        borderRadius: 999, gap: 6,
    },
    avatar: { width: 20, height: 20, borderRadius: 10 },
    usernameText: { fontSize: 13, fontWeight: '500' },
    tokenPill: {
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 10, paddingVertical: 6,
        borderRadius: 999, borderWidth: 1, gap: 5,
    },
    tokenDot: { width: 8, height: 8, borderRadius: 4 },
    tokenText: { fontSize: 13, fontWeight: '600' },
    tokenBalance: { fontSize: 11 },
    balanceSection: { gap: 2 },
    balanceLabel: { fontSize: 13 },
    balanceRow: { flexDirection: 'row', alignItems: 'center' },
    balanceMain: { fontSize: 40, fontWeight: '700', letterSpacing: -1 },
    balanceSub: { fontSize: 13, marginTop: 2 },
    actions: { flexDirection: 'row', gap: 12 },
    actionBtn: {
        flex: 1, alignItems: 'center', paddingVertical: 14,
        borderRadius: 14, borderWidth: 1, gap: 4,
    },
    actionIcon: { fontSize: 20, fontWeight: '600' },
    actionLabel: { fontSize: 12, fontWeight: '500' },
});
//# sourceMappingURL=balance-card.js.map