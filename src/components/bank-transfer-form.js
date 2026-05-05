"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransferForm = BankTransferForm;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/bank-transfer-form.tsx
// Airbills "Send To Any Bank Account" screen
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
const button_1 = require("./button");
const token_badge_1 = require("./token-badge");
function BankTransferForm({ banks, balance = '0.00', token = 'USDC', onSend }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const [accountNumber, setAccountNumber] = (0, react_1.useState)('');
    const [selectedBank, setSelectedBank] = (0, react_1.useState)(null);
    const [amount, setAmount] = (0, react_1.useState)('');
    const [showBankPicker, setShowBankPicker] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.container, { backgroundColor: C.background }], children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.header, children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: [styles.backBtn, { backgroundColor: C.surface }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.foreground, fontSize: 16 }, children: "\u2190" }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.title, { color: C.foreground }], children: "Send To Any Bank Account" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.subtitle, { color: C.textMuted }], children: "Send to local bank account" })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { gap: 12, marginTop: 24 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.inputRow, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, { value: accountNumber, onChangeText: setAccountNumber, placeholder: "Account Number", placeholderTextColor: C.textSubtle, keyboardType: "numeric", maxLength: 10, style: [styles.textInput, { color: C.foreground }] }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: [styles.pasteBtn, { backgroundColor: C.card }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.pasteBtnText, { color: C.foreground }], children: "Paste" }) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: () => setShowBankPicker(true), style: [styles.bankSelector, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 16 }, children: "\uD83C\uDFDB" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.bankSelectorText, { color: selectedBank ? C.foreground : C.textSubtle }], children: selectedBank ? selectedBank.name : 'Choose Bank' }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted }, children: "\u25BE" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.amountContainer, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.amountLabel, { color: C.textMuted }], children: "Amount" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.amountRow, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.currency, { color: C.foreground }], children: "\u20A6" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { value: amount, onChangeText: setAmount, keyboardType: "numeric", placeholder: "0", placeholderTextColor: C.textSubtle, style: [styles.amountInput, { color: C.foreground }] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.usdcEquiv, { color: C.textMuted }], children: "\u2248 USDC" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: 'flex-end', gap: 4 }, children: [(0, jsx_runtime_1.jsx)(token_badge_1.TokenBadge, { token: token, showChevron: true }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: [styles.balanceText, { color: C.textMuted }], children: ["Balance: ", balance] })] })] })] }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "primary", size: "lg", fullWidth: true, onPress: () => {
                            if (selectedBank && accountNumber && amount) {
                                onSend?.({ accountNumber, bank: selectedBank, amount });
                            }
                        }, children: "Send" })] })] }));
}
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    backBtn: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 16, fontWeight: '700' },
    subtitle: { fontSize: 12, marginTop: 2 },
    inputRow: {
        flexDirection: 'row', alignItems: 'center',
        borderRadius: globals_1.INPUT_RADIUS, borderWidth: 1,
        paddingHorizontal: 16, height: 52,
    },
    textInput: { flex: 1, fontSize: 15 },
    pasteBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999 },
    pasteBtnText: { fontWeight: '600', fontSize: 13 },
    bankSelector: {
        flexDirection: 'row', alignItems: 'center', gap: 10,
        borderRadius: globals_1.INPUT_RADIUS, borderWidth: 1,
        paddingHorizontal: 16, height: 52,
    },
    bankSelectorText: { flex: 1, fontSize: 15 },
    amountContainer: {
        borderRadius: globals_1.BORDER_RADIUS, borderWidth: 1, padding: 16,
    },
    amountLabel: { fontSize: 12, marginBottom: 8 },
    amountRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 12 },
    currency: { fontSize: 22, fontWeight: '600' },
    amountInput: { fontSize: 36, fontWeight: '700', letterSpacing: -1 },
    usdcEquiv: { fontSize: 12, marginTop: 4 },
    balanceText: { fontSize: 11 },
});
//# sourceMappingURL=bank-transfer-form.js.map