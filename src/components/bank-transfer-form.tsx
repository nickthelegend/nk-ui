// components/ui/bank-transfer-form.tsx
// Airbills "Send To Any Bank Account" screen
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  TextInput, ScrollView,
} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS, INPUT_RADIUS, BUTTON_HEIGHT } from '@/theme/globals';
import { Button } from './button';
import { TokenBadge } from './token-badge';

interface Bank { id: string; name: string; logo?: string; }

interface BankTransferFormProps {
  banks: Bank[];
  balance?: string;
  token?: string;
  onSend?: (data: { accountNumber: string; bank: Bank; amount: string }) => void;
}

export function BankTransferForm({ banks, balance = '0.00', token = 'USDC', onSend }: BankTransferFormProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [amount, setAmount] = useState('');
  const [showBankPicker, setShowBankPicker] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: C.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={[styles.backBtn, { backgroundColor: C.surface }]}>
          <Text style={{ color: C.foreground, fontSize: 16 }}>←</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.title, { color: C.foreground }]}>Send To Any Bank Account</Text>
          <Text style={[styles.subtitle, { color: C.textMuted }]}>Send to local bank account</Text>
        </View>
      </View>

      <View style={{ gap: 12, marginTop: 24 }}>
        {/* Account Number */}
        <View style={[styles.inputRow, { backgroundColor: C.surface, borderColor: C.border }]}>
          <TextInput
            value={accountNumber}
            onChangeText={setAccountNumber}
            placeholder="Account Number"
            placeholderTextColor={C.textSubtle}
            keyboardType="numeric"
            maxLength={10}
            style={[styles.textInput, { color: C.foreground }]}
          />
          <TouchableOpacity style={[styles.pasteBtn, { backgroundColor: C.card }]}>
            <Text style={[styles.pasteBtnText, { color: C.foreground }]}>Paste</Text>
          </TouchableOpacity>
        </View>

        {/* Bank selector */}
        <TouchableOpacity
          onPress={() => setShowBankPicker(true)}
          style={[styles.bankSelector, { backgroundColor: C.surface, borderColor: C.border }]}
        >
          <Text style={{ color: C.textMuted, fontSize: 16 }}>🏛</Text>
          <Text style={[styles.bankSelectorText, { color: selectedBank ? C.foreground : C.textSubtle }]}>
            {selectedBank ? selectedBank.name : 'Choose Bank'}
          </Text>
          <Text style={{ color: C.textMuted }}>▾</Text>
        </TouchableOpacity>

        {/* Amount */}
        <View style={[styles.amountContainer, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Text style={[styles.amountLabel, { color: C.textMuted }]}>Amount</Text>
          <View style={styles.amountRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.currency, { color: C.foreground }]}>₦</Text>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={C.textSubtle}
                style={[styles.amountInput, { color: C.foreground }]}
              />
              <Text style={[styles.usdcEquiv, { color: C.textMuted }]}>≈ USDC</Text>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 4 }}>
              <TokenBadge token={token} showChevron />
              <Text style={[styles.balanceText, { color: C.textMuted }]}>
                Balance: {balance}
              </Text>
            </View>
          </View>
        </View>

        {/* Send button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onPress={() => {
            if (selectedBank && accountNumber && amount) {
              onSend?.({ accountNumber, bank: selectedBank, amount });
            }
          }}
        >
          Send
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '700' },
  subtitle: { fontSize: 12, marginTop: 2 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: INPUT_RADIUS, borderWidth: 1,
    paddingHorizontal: 16, height: 52,
  },
  textInput: { flex: 1, fontSize: 15 },
  pasteBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999 },
  pasteBtnText: { fontWeight: '600', fontSize: 13 },
  bankSelector: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    borderRadius: INPUT_RADIUS, borderWidth: 1,
    paddingHorizontal: 16, height: 52,
  },
  bankSelectorText: { flex: 1, fontSize: 15 },
  amountContainer: {
    borderRadius: BORDER_RADIUS, borderWidth: 1, padding: 16,
  },
  amountLabel: { fontSize: 12, marginBottom: 8 },
  amountRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 12 },
  currency: { fontSize: 22, fontWeight: '600' },
  amountInput: { fontSize: 36, fontWeight: '700', letterSpacing: -1 },
  usdcEquiv: { fontSize: 12, marginTop: 4 },
  balanceText: { fontSize: 11 },
});
