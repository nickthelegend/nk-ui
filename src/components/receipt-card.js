"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptCard = ReceiptCard;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/receipt-card.tsx
// "Transfer Successful" screen — dashed border receipt card
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
const button_1 = require("./button");
function ReceiptCard({ status, title, amount, amountSub, rows, onDone, onShare, style, }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const statusColor = status === 'success' ? C.success : status === 'failed' ? C.destructive : C.warning;
    const statusIcon = status === 'success' ? '✓' : status === 'failed' ? '✕' : '⏳';
    const statusTitle = title ?? (status === 'success' ? 'TRANSFER SUCCESSFUL' : status === 'failed' ? 'TRANSFER FAILED' : 'PENDING');
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.wrapper, { backgroundColor: C.background }, style], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.statusIconCircle, { borderColor: statusColor, backgroundColor: statusColor + '22' }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: statusColor, fontSize: 28, fontWeight: '700' }, children: statusIcon }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.statusTitle, { color: C.textMuted }], children: statusTitle }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.amount, { color: C.foreground }], children: amount }), amountSub && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.amountSub, { color: C.textMuted }], children: amountSub }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.dashedLine, { borderColor: C.border }] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.receiptBody, { backgroundColor: C.card, borderColor: C.border }], children: rows.map((row, i) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.receiptRow, i < rows.length - 1 && { borderBottomColor: C.border, borderBottomWidth: 0.5 }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.rowLabel, { color: C.textMuted }], children: row.label }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', gap: 6 }, children: [row.icon && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14 }, children: row.icon }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.rowValue, { color: C.foreground }], children: row.value })] })] }, i))) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 10, marginTop: 24 }, children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "primary", size: "lg", fullWidth: true, onPress: onDone, children: "Done" }), onShare && ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", size: "md", fullWidth: true, onPress: onShare, children: "Share Receipt" }))] })] }));
}
const styles = react_native_1.StyleSheet.create({
    wrapper: { flex: 1, padding: 24, alignItems: 'center' },
    statusIconCircle: {
        width: 72, height: 72, borderRadius: 36,
        borderWidth: 2, alignItems: 'center', justifyContent: 'center',
        marginBottom: 12,
    },
    statusTitle: { fontSize: 12, fontWeight: '700', letterSpacing: 1.5, marginBottom: 4 },
    amount: { fontSize: 36, fontWeight: '800', letterSpacing: -1 },
    amountSub: { fontSize: 13, marginTop: 4 },
    dashedLine: {
        width: '110%', borderWidth: 1, borderStyle: 'dashed',
        marginVertical: 20,
    },
    receiptBody: {
        width: '100%', borderRadius: globals_1.BORDER_RADIUS, borderWidth: 1, overflow: 'hidden',
    },
    receiptRow: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16,
    },
    rowLabel: { fontSize: 13 },
    rowValue: { fontSize: 13, fontWeight: '600' },
});
//# sourceMappingURL=receipt-card.js.map