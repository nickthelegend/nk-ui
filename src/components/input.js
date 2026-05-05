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
exports.Input = Input;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/input.tsx
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
function Input({ label, error, hint, leftIcon, rightElement, containerStyle, style, ...props }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    const [focused, setFocused] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [{ gap: 6 }, containerStyle], children: [label && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 13, fontWeight: '500', marginLeft: 4 }, children: label })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                    styles.container,
                    {
                        backgroundColor: C.input,
                        borderColor: error ? C.destructive : focused ? C.primary : C.inputBorder,
                        borderRadius: globals_1.INPUT_RADIUS,
                        height: globals_1.HEIGHT,
                    },
                ], children: [leftIcon && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.leftIcon, children: leftIcon }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { ...props, onFocus: (e) => { setFocused(true); props.onFocus?.(e); }, onBlur: (e) => { setFocused(false); props.onBlur?.(e); }, placeholderTextColor: C.textSubtle, style: [
                            styles.input,
                            {
                                color: C.text,
                                flex: 1,
                                paddingLeft: leftIcon ? 0 : 16,
                                paddingRight: rightElement ? 0 : 16,
                            },
                            style,
                        ] }), rightElement && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.rightElement, children: rightElement })] }), error && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.destructive, fontSize: 12, marginLeft: 4 }, children: error }), hint && !error && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: C.textMuted, fontSize: 12, marginLeft: 4 }, children: hint })] }));
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        overflow: 'hidden',
    },
    leftIcon: { paddingHorizontal: 12 },
    rightElement: { paddingHorizontal: 12 },
    input: { fontSize: 15, fontWeight: '400' },
});
//# sourceMappingURL=input.js.map