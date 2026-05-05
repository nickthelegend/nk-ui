// components/ui/token-badge.tsx — Crypto token pill (USDC, SOL, ETH, etc.)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

type Token = 'USDC' | 'SOL' | 'ETH' | 'BTC' | 'USDT' | string;

interface TokenBadgeProps {
  token: Token;
  showChevron?: boolean;
  onPress?: () => void;
  balance?: string;
  style?: ViewStyle;
}

const TOKEN_COLORS: Record<string, string> = {
  USDC: '#2775CA',
  SOL: '#9945FF',
  ETH: '#627EEA',
  BTC: '#F7931A',
  USDT: '#26A17B',
};

export function TokenBadge({ token, showChevron = false, onPress, balance, style }: TokenBadgeProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const tokenColor = TOKEN_COLORS[token] ?? C.primary;

  const content = (
    <View style={[styles.container, { backgroundColor: C.surface, borderColor: C.border }, style]}>
      {/* Token color dot */}
      <View style={[styles.dot, { backgroundColor: tokenColor }]} />
      <Text style={[styles.label, { color: C.foreground }]}>{token}</Text>
      {showChevron && (
        <Text style={[styles.chevron, { color: C.textMuted }]}>▾</Text>
      )}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress} activeOpacity={0.75}>{content}</TouchableOpacity>;
  }
  return content;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    gap: 6,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  label: { fontSize: 14, fontWeight: '600' },
  chevron: { fontSize: 12, marginLeft: 2 },
});
