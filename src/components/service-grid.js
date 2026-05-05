"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceGrid = ServiceGrid;
const jsx_runtime_1 = require("react/jsx-runtime");
// components/ui/service-grid.tsx
// Airbills-style services grid: Airtime, Internet, Transport, Bet, etc.
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useColorScheme_1 = require("@/hooks/useColorScheme");
const colors_1 = require("@/theme/colors");
function ServiceGrid({ services, columns = 4, style }) {
    const scheme = (0, useColorScheme_1.useColorScheme)() ?? 'dark';
    const C = colors_1.Colors[scheme];
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: style, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.grid, { gap: 10 }], children: services.map((s) => ((0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { onPress: s.onPress, activeOpacity: 0.7, style: [
                    styles.serviceItem,
                    { backgroundColor: C.surface, borderColor: C.border },
                    { width: `${(100 / columns) - 2}%` },
                ], children: [s.badge && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.badge, { backgroundColor: C.destructive }], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.badgeText, children: s.badge }) })), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.serviceIcon, children: s.icon }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.serviceLabel, { color: C.textMuted }], children: s.label })] }, s.id))) }) }));
}
const styles = react_native_1.StyleSheet.create({
    grid: { flexDirection: 'row', flexWrap: 'wrap' },
    serviceItem: {
        aspectRatio: 1, borderRadius: 14, borderWidth: 1,
        alignItems: 'center', justifyContent: 'center',
        gap: 6, position: 'relative',
    },
    serviceIcon: { fontSize: 24 },
    serviceLabel: { fontSize: 11, fontWeight: '500' },
    badge: {
        position: 'absolute', top: 6, right: 6,
        width: 8, height: 8, borderRadius: 4,
    },
    badgeText: { fontSize: 8, color: '#fff', fontWeight: '700' },
});
//# sourceMappingURL=service-grid.js.map