"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRow = TransactionRow;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/transaction-row.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const TYPE_ICONS = {
    send: '↗',
    receive: '↙',
    swap: '⇄',
    bill: '📄',
    other: '•',
};
function TransactionRow({ type, title, subtitle, amount, amountColor = 'neutral', timestamp, status, onPress, style, }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const amountColors = { positive: C.success, negative: C.destructive, neutral: C.foreground };
    const statusColors = { success: C.success, pending: C.warning, failed: C.destructive };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onPress, activeOpacity: 0.7, style: [styles.row, { borderBottomColor: C.border }, style], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.iconCircle, { backgroundColor: C.surface }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 18, color: C.foreground }, children: TYPE_ICONS[type] }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.title, { color: C.foreground }], children: title }), subtitle && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.subtitle, { color: C.textMuted }], children: subtitle })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: 'flex-end' }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.amount, { color: amountColors[amountColor] }], children: amount }), timestamp && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.timestamp, { color: C.textSubtle }], children: timestamp }), status && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.statusDot, { backgroundColor: statusColors[status] }] }))] })] }));
}
const styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row', alignItems: 'center', gap: 12,
        paddingVertical: 14, borderBottomWidth: 0.5,
    },
    iconCircle: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 14, fontWeight: '600' },
    subtitle: { fontSize: 12, marginTop: 2 },
    amount: { fontSize: 14, fontWeight: '700' },
    timestamp: { fontSize: 11, marginTop: 2 },
    statusDot: { width: 6, height: 6, borderRadius: 3, marginTop: 3 },
});
//# sourceMappingURL=transaction-row.js.map