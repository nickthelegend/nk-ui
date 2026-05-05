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
exports.SelectBankSheet = SelectBankSheet;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/select-bank-sheet.tsx
// Airbills "Select Bank" modal sheet
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
function SelectBankSheet({ visible, banks, onSelect, onClose }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const [query, setQuery] = (0, react_1.useState)('');
    const filtered = banks.filter(b => b.name.toLowerCase().includes(query.toLowerCase()));
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: visible, transparent: true, animationType: "slide", onRequestClose: onClose, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.overlay, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.sheet, { backgroundColor: C.card }], children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.sheetHeader, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.sheetTitle, { color: C.primary }], children: "Select Bank" }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onClose, style: [styles.closeBtn, { backgroundColor: C.surface }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.foreground, fontSize: 16 }, children: "\u00D7" }) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.searchRow, { backgroundColor: C.surface, borderColor: C.border }], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted }, children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { value: query, onChangeText: setQuery, placeholder: "Search", placeholderTextColor: C.textSubtle, style: [styles.searchInput, { color: C.foreground }] })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.sectionLabel, { color: C.textMuted }], children: "Bank" }), (0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: filtered, keyExtractor: b => b.id, showsVerticalScrollIndicator: false, renderItem: ({ item }) => ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: () => { onSelect(item); onClose(); setQuery(''); }, style: [styles.bankRow, { borderBottomColor: C.border }], activeOpacity: 0.7, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.bankLogo, { backgroundColor: item.color ?? C.primary + '33' }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 16 }, children: item.logo ?? '🏦' }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.bankName, { color: C.foreground }], children: item.name })] })) })] }) }) }));
}
const styles = react_native_1.StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
    sheet: {
        borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: 20, maxHeight: '80%',
    },
    sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    sheetTitle: { fontSize: 22, fontWeight: '700' },
    closeBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
    searchRow: {
        flexDirection: 'row', alignItems: 'center', gap: 10,
        paddingHorizontal: 14, height: 44, borderRadius: globals_1.INPUT_RADIUS,
        borderWidth: 1, marginBottom: 12,
    },
    searchInput: { flex: 1, fontSize: 14 },
    sectionLabel: { fontSize: 11, fontWeight: '600', letterSpacing: 0.8, marginBottom: 8, marginLeft: 4 },
    bankRow: {
        flexDirection: 'row', alignItems: 'center', gap: 14,
        paddingVertical: 14, borderBottomWidth: 0.5,
    },
    bankLogo: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
    bankName: { fontSize: 15, fontWeight: '500' },
});
//# sourceMappingURL=select-bank-sheet.js.map