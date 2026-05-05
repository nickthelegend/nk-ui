// components/ui/select-bank-sheet.tsx
// Airbills "Select Bank" modal sheet
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, TextInput,
  FlatList, Modal, StyleSheet,
} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS, INPUT_RADIUS } from '@/theme/globals';

interface Bank { id: string; name: string; logo?: string; color?: string; }

interface SelectBankSheetProps {
  visible: boolean;
  banks: Bank[];
  onSelect: (bank: Bank) => void;
  onClose: () => void;
}

export function SelectBankSheet({ visible, banks, onSelect, onClose }: SelectBankSheetProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const [query, setQuery] = useState('');

  const filtered = banks.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.sheet, { backgroundColor: C.card }]}>
          <View style={styles.sheetHeader}>
            <Text style={[styles.sheetTitle, { color: C.primary }]}>Select Bank</Text>
            <TouchableOpacity onPress={onClose} style={[styles.closeBtn, { backgroundColor: C.surface }]}>
              <Text style={{ color: C.foreground, fontSize: 16 }}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View style={[styles.searchRow, { backgroundColor: C.surface, borderColor: C.border }]}>
            <Text style={{ color: C.textMuted }}>🔍</Text>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search"
              placeholderTextColor={C.textSubtle}
              style={[styles.searchInput, { color: C.foreground }]}
            />
          </View>

          <Text style={[styles.sectionLabel, { color: C.textMuted }]}>Bank</Text>

          <FlatList
            data={filtered}
            keyExtractor={b => b.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => { onSelect(item); onClose(); setQuery(''); }}
                style={[styles.bankRow, { borderBottomColor: C.border }]}
                activeOpacity={0.7}
              >
                <View style={[styles.bankLogo, { backgroundColor: item.color ?? C.primary + '33' }]}>
                  <Text style={{ fontSize: 16 }}>{item.logo ?? '🏦'}</Text>
                </View>
                <Text style={[styles.bankName, { color: C.foreground }]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  sheet: {
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 20, maxHeight: '80%',
  },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sheetTitle: { fontSize: 22, fontWeight: '700' },
  closeBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  searchRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 14, height: 44, borderRadius: INPUT_RADIUS,
    borderWidth: 1, marginBottom: 12,
  },
  searchInput: { flex: 1, fontSize: 14 },
  sectionLabel: { fontSize: 11, fontWeight: '600', letterSpacing: 0.8, marginBottom: 8, marginLeft: 4 },
  bankRow: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    paddingVertical: 14, borderBottomWidth: 0.5,
  },
  bankLogo: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  bankName: { fontSize: 15, fontWeight: '500' },
});
