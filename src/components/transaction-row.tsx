// components/ui/transaction-row.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

type TxType = 'send' | 'receive' | 'swap' | 'bill' | 'other';

interface TransactionRowProps {
  type: TxType;
  title: string;
  subtitle?: string;
  amount: string;
  amountColor?: 'positive' | 'negative' | 'neutral';
  timestamp?: string;
  status?: 'success' | 'pending' | 'failed';
  onPress?: () => void;
  style?: ViewStyle;
}

const TYPE_ICONS: Record<TxType, string> = {
  send: '↗',
  receive: '↙',
  swap: '⇄',
  bill: '📄',
  other: '•',
};

export function TransactionRow({
  type, title, subtitle, amount, amountColor = 'neutral',
  timestamp, status, onPress, style,
}: TransactionRowProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  const amountColors = { positive: C.success, negative: C.destructive, neutral: C.foreground };
  const statusColors = { success: C.success, pending: C.warning, failed: C.destructive };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.row, { borderBottomColor: C.border }, style]}
    >
      <View style={[styles.iconCircle, { backgroundColor: C.surface }]}>
        <Text style={{ fontSize: 18, color: C.foreground }}>{TYPE_ICONS[type]}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: C.foreground }]}>{title}</Text>
        {subtitle && <Text style={[styles.subtitle, { color: C.textMuted }]}>{subtitle}</Text>}
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={[styles.amount, { color: amountColors[amountColor] }]}>{amount}</Text>
        {timestamp && <Text style={[styles.timestamp, { color: C.textSubtle }]}>{timestamp}</Text>}
        {status && (
          <View style={[styles.statusDot, { backgroundColor: statusColors[status] }]} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingVertical: 14, borderBottomWidth: 0.5,
  },
  iconCircle: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 14, fontWeight: '600' },
  subtitle: { fontSize: 12, marginTop: 2 },
  amount: { fontSize: 14, fontWeight: '700' },
  timestamp: { fontSize: 11, marginTop: 2 },
  statusDot: { width: 6, height: 6, borderRadius: 3, marginTop: 3 },
});
