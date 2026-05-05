"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/badge.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
function Badge({ label, variant = 'default', style, dot = false }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const variantMap = {
        default: { bg: C.surface, text: C.foreground },
        success: { bg: '#22C55E22', text: C.success },
        destructive: { bg: '#FF453A22', text: C.destructive },
        warning: { bg: '#FF9F0A22', text: C.warning },
        info: { bg: '#0A84FF22', text: C.info },
        outline: { bg: 'transparent', text: C.foreground, border: C.border },
    };
    const v = variantMap[variant];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
            styles.badge,
            { backgroundColor: v.bg, borderColor: v.border ?? 'transparent', borderWidth: v.border ? 1 : 0 },
            style,
        ], children: [dot && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.dot, { backgroundColor: v.text }] })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.text, { color: v.text }], children: label })] }));
}
const styles = react_native_1.StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        gap: 5,
        alignSelf: 'flex-start',
    },
    dot: { width: 6, height: 6, borderRadius: 3 },
    text: { fontSize: 12, fontWeight: '600', letterSpacing: 0.3 },
});
//# sourceMappingURL=badge.js.map