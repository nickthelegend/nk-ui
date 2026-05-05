// components/ui/badge.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

type BadgeVariant = 'default' | 'success' | 'destructive' | 'warning' | 'info' | 'outline';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
  dot?: boolean;
}

export function Badge({ label, variant = 'default', style, dot = false }: BadgeProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  const variantMap: Record<BadgeVariant, { bg: string; text: string; border?: string }> = {
    default:     { bg: C.surface, text: C.foreground },
    success:     { bg: '#22C55E22', text: C.success },
    destructive: { bg: '#FF453A22', text: C.destructive },
    warning:     { bg: '#FF9F0A22', text: C.warning },
    info:        { bg: '#0A84FF22', text: C.info },
    outline:     { bg: 'transparent', text: C.foreground, border: C.border },
  };

  const v = variantMap[variant];

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: v.bg, borderColor: v.border ?? 'transparent', borderWidth: v.border ? 1 : 0 },
        style,
      ]}
    >
      {dot && (
        <View style={[styles.dot, { backgroundColor: v.text }]} />
      )}
      <Text style={[styles.text, { color: v.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
