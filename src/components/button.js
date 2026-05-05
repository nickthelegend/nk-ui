"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/button.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const expo_linear_gradient_1 = require("expo-linear-gradient");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
function Button({ children, onPress, variant = 'primary', size = 'md', disabled = false, loading = false, fullWidth = false, style, textStyle, leftIcon, rightIcon, }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const sizeStyles = {
        sm: { height: 38, paddingHorizontal: 16, borderRadius: 10 },
        md: { height: globals_1.BUTTON_HEIGHT, paddingHorizontal: 24, borderRadius: globals_1.PILL_RADIUS },
        lg: { height: 60, paddingHorizontal: 32, borderRadius: globals_1.PILL_RADIUS },
        icon: { height: 44, width: 44, borderRadius: 22, paddingHorizontal: 0 },
    };
    const textSizes = { sm: 14, md: 16, lg: 18, icon: 16 };
    if (variant === 'primary' || variant === 'default') {
        return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onPress, disabled: disabled || loading, activeOpacity: 0.82, style: [fullWidth && { width: '100%' }, style], children: (0, jsx_runtime_1.jsxs)(expo_linear_gradient_1.LinearGradient, { colors: [C.primaryGradientStart, C.primaryGradientEnd], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: [
                    styles.base,
                    sizeStyles[size],
                    disabled && { opacity: 0.5 },
                    globals_1.SHADOW_LG,
                ], children: [leftIcon && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginRight: 8 }, children: leftIcon }), loading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "#fff", size: "small" })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.text, { fontSize: textSizes[size] }, textStyle], children: children })), rightIcon && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginLeft: 8 }, children: rightIcon })] }) }));
    }
    const variantStyles = {
        secondary: { backgroundColor: C.secondary, borderWidth: 0 },
        destructive: { backgroundColor: C.destructive },
        ghost: { backgroundColor: 'transparent' },
        outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: C.border },
        success: { backgroundColor: C.success },
    };
    const variantTextColor = {
        secondary: C.foreground,
        destructive: '#fff',
        ghost: C.foreground,
        outline: C.foreground,
        success: '#fff',
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: onPress, disabled: disabled || loading, activeOpacity: 0.75, style: [
            styles.base,
            sizeStyles[size],
            variantStyles[variant],
            disabled && { opacity: 0.5 },
            fullWidth && { width: '100%' },
            style,
        ], children: [leftIcon && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginRight: 8 }, children: leftIcon }), loading ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: variantTextColor[variant], size: "small" })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.text, { color: variantTextColor[variant], fontSize: textSizes[size] }, textStyle], children: children })), rightIcon && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginLeft: 8 }, children: rightIcon })] }));
}
const styles = react_native_1.StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '600',
        letterSpacing: 0.3,
    },
});
//# sourceMappingURL=button.js.map