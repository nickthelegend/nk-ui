// components/ui/receipt-card.tsx
// "Transfer Successful" screen — dashed border receipt card
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS } from '@/theme/globals';
import { Button } from './button';

interface ReceiptRow { label: string; value: string; icon?: string; }

interface ReceiptCardProps {
  status: 'success' | 'pending' | 'failed';
  title?: string;
  amount: string;
  amountSub?: string;
  rows: ReceiptRow[];
  onDone?: () => void;
  onShare?: () => void;
  style?: ViewStyle;
}

export function ReceiptCard({
  status,
  title,
  amount,
  amountSub,
  rows,
  onDone,
  onShare,
  style,
}: ReceiptCardProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  const statusColor = status === 'success' ? C.success : status === 'failed' ? C.destructive : C.warning;
  const statusIcon = status === 'success' ? '✓' : status === 'failed' ? '✕' : '⏳';
  const statusTitle = title ?? (status === 'success' ? 'TRANSFER SUCCESSFUL' : status === 'failed' ? 'TRANSFER FAILED' : 'PENDING');

  return (
    <View style={[styles.wrapper, { backgroundColor: C.background }, style]}>
      {/* Status icon */}
      <View style={[styles.statusIconCircle, { borderColor: statusColor, backgroundColor: statusColor + '22' }]}>
        <Text style={{ color: statusColor, fontSize: 28, fontWeight: '700' }}>{statusIcon}</Text>
      </View>

      <Text style={[styles.statusTitle, { color: C.textMuted }]}>{statusTitle}</Text>
      <Text style={[styles.amount, { color: C.foreground }]}>{amount}</Text>
      {amountSub && <Text style={[styles.amountSub, { color: C.textMuted }]}>{amountSub}</Text>}

      {/* Dashed divider */}
      <View style={[styles.dashedLine, { borderColor: C.border }]} />

      {/* Receipt rows */}
      <View style={[styles.receiptBody, { backgroundColor: C.card, borderColor: C.border }]}>
        {rows.map((row, i) => (
          <View key={i} style={[styles.receiptRow, i < rows.length - 1 && { borderBottomColor: C.border, borderBottomWidth: 0.5 }]}>
            <Text style={[styles.rowLabel, { color: C.textMuted }]}>{row.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              {row.icon && <Text style={{ fontSize: 14 }}>{row.icon}</Text>}
              <Text style={[styles.rowValue, { color: C.foreground }]}>{row.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ gap: 10, marginTop: 24 }}>
        <Button variant="primary" size="lg" fullWidth onPress={onDone}>Done</Button>
        {onShare && (
          <Button variant="outline" size="md" fullWidth onPress={onShare}>Share Receipt</Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, padding: 24, alignItems: 'center' },
  statusIconCircle: {
    width: 72, height: 72, borderRadius: 36,
    borderWidth: 2, alignItems: 'center', justifyContent: 'center',
    marginBottom: 12,
  },
  statusTitle: { fontSize: 12, fontWeight: '700', letterSpacing: 1.5, marginBottom: 4 },
  amount: { fontSize: 36, fontWeight: '800', letterSpacing: -1 },
  amountSub: { fontSize: 13, marginTop: 4 },
  dashedLine: {
    width: '110%', borderWidth: 1, borderStyle: 'dashed',
    marginVertical: 20,
  },
  receiptBody: {
    width: '100%', borderRadius: BORDER_RADIUS, borderWidth: 1, overflow: 'hidden',
  },
  receiptRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16,
  },
  rowLabel: { fontSize: 13 },
  rowValue: { fontSize: 13, fontWeight: '600' },
});
