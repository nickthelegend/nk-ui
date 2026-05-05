"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/card.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
const globals_1 = require("@/theme/globals");
function Card({ children, style, elevated = false, padding = 16, noBorder = false }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            {
                backgroundColor: C.card,
                borderRadius: globals_1.BORDER_RADIUS,
                padding,
                borderWidth: noBorder ? 0 : 1,
                borderColor: C.border,
            },
            elevated && globals_1.SHADOW_MD,
            style,
        ], children: children }));
}
//# sourceMappingURL=card.js.map