"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmSheet = ConfirmSheet;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/confirm-sheet.tsx
// "Confirm Transaction" bottom sheet modal
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
const button_1 = require("./button");
function ConfirmSheet({ visible, title = 'Confirm Transaction', rows, onConfirm, onClose, confirmLabel = 'Confirm', loading = false, poweredBy, }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: visible, transparent: true, animationType: "slide", onRequestClose: onClose, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.overlay, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.sheet, { backgroundColor: C.card }], children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.header, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.title, { color: C.primary }], children: title }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onClose, style: [styles.closeBtn, { backgroundColor: C.destructive }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: '#fff', fontWeight: '700', fontSize: 16 }, children: "\u00D7" }) })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { gap: 8, marginTop: 8 }, children: rows.map((row, i) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                                styles.row,
                                { backgroundColor: row.highlight ? C.surface : C.surfaceHighlight ?? C.surface, borderColor: C.border },
                            ], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.rowLabel, { color: C.textMuted }], children: row.label }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.rowValue, { color: C.foreground }], children: row.value })] }, i))) }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "primary", size: "lg", fullWidth: true, loading: loading, onPress: onConfirm, style: { marginTop: 20 }, children: confirmLabel }), poweredBy && ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: [styles.poweredBy, { color: C.textSubtle }], children: ["Processed by ", poweredBy] }))] }) }) }));
}
const styles = react_native_1.StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
    sheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, paddingBottom: 36 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    title: { fontSize: 20, fontWeight: '700' },
    closeBtn: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    row: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: 16, paddingVertical: 14, borderRadius: globals_1.INPUT_RADIUS, borderWidth: 0,
    },
    rowLabel: { fontSize: 13 },
    rowValue: { fontSize: 14, fontWeight: '600' },
    poweredBy: { textAlign: 'center', fontSize: 12, marginTop: 12 },
});
//# sourceMappingURL=confirm-sheet.js.map