// components/ui/confirm-sheet.tsx
// "Confirm Transaction" bottom sheet modal
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS, INPUT_RADIUS } from '@/theme/globals';
import { Button } from './button';

interface ConfirmRow { label: string; value: string; highlight?: boolean; }

interface ConfirmSheetProps {
  visible: boolean;
  title?: string;
  rows: ConfirmRow[];
  onConfirm: () => void;
  onClose: () => void;
  confirmLabel?: string;
  loading?: boolean;
  poweredBy?: string;
}

export function ConfirmSheet({
  visible,
  title = 'Confirm Transaction',
  rows,
  onConfirm,
  onClose,
  confirmLabel = 'Confirm',
  loading = false,
  poweredBy,
}: ConfirmSheetProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.sheet, { backgroundColor: C.card }]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: C.primary }]}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={[styles.closeBtn, { backgroundColor: C.destructive }]}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 8, marginTop: 8 }}>
            {rows.map((row, i) => (
              <View
                key={i}
                style={[
                  styles.row,
                  { backgroundColor: row.highlight ? C.surface : C.surfaceHighlight ?? C.surface, borderColor: C.border },
                ]}
              >
                <Text style={[styles.rowLabel, { color: C.textMuted }]}>{row.label}</Text>
                <Text style={[styles.rowValue, { color: C.foreground }]}>{row.value}</Text>
              </View>
            ))}
          </View>

          <Button
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            onPress={onConfirm}
            style={{ marginTop: 20 }}
          >
            {confirmLabel}
          </Button>

          {poweredBy && (
            <Text style={[styles.poweredBy, { color: C.textSubtle }]}>
              Processed by {poweredBy}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  sheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, paddingBottom: 36 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '700' },
  closeBtn: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14, borderRadius: INPUT_RADIUS, borderWidth: 0,
  },
  rowLabel: { fontSize: 13 },
  rowValue: { fontSize: 14, fontWeight: '600' },
  poweredBy: { textAlign: 'center', fontSize: 12, marginTop: 12 },
});
