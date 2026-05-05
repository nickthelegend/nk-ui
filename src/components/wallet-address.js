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
exports.WalletAddress = WalletAddress;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/wallet-address.tsx
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
function truncateAddress(addr) {
    if (addr.length <= 12)
        return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}
function WalletAddress({ address, label, truncate = true }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const [copied, setCopied] = (0, react_1.useState)(false);
    const copy = () => {
        react_native_1.Clipboard.setString(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [label && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 11, marginBottom: 4 }, children: label }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: copy, style: [styles.pill, { backgroundColor: C.surface, borderColor: C.border }], activeOpacity: 0.7, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.address, { color: C.foreground }], children: truncate ? truncateAddress(address) : address }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.copyBadge, { backgroundColor: copied ? C.success + '33' : C.muted }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: copied ? C.success : C.textMuted, fontSize: 11 }, children: copied ? '✓' : '⧉' }) })] })] }));
}
const styles = react_native_1.StyleSheet.create({
    container: {},
    pill: {
        flexDirection: 'row', alignItems: 'center', gap: 8,
        paddingHorizontal: 12, paddingVertical: 8,
        borderRadius: 999, borderWidth: 1, alignSelf: 'flex-start',
    },
    address: { fontSize: 13, fontFamily: 'monospace', fontWeight: '500' },
    copyBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999 },
});
//# sourceMappingURL=wallet-address.js.map