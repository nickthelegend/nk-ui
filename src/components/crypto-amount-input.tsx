import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS, INPUT_RADIUS } from '@/theme/globals';

interface CryptoAmountInputProps {
  fiatCurrency?: string;
  cryptoCurrency?: string;
  onAmountChange?: (amount: string) => void;
  style?: ViewStyle;
}

export function CryptoAmountInput({ 
  fiatCurrency = 'USD', 
  cryptoCurrency = 'USDC',
  onAmountChange,
  style 
}: CryptoAmountInputProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const [amount, setAmount] = useState('');
  const [isCryptoPrimary, setIsCryptoPrimary] = useState(false);

  const primarySymbol = isCryptoPrimary ? cryptoCurrency : fiatCurrency;
  const secondarySymbol = isCryptoPrimary ? fiatCurrency : cryptoCurrency;

  const handleSwap = () => setIsCryptoPrimary(!isCryptoPrimary);
  const handleChange = (val: string) => { setAmount(val); onAmountChange?.(val); };

  return (
    <View style={[styles.container, { backgroundColor: C.surface, borderColor: C.border }, style]}>
      <View style={styles.topRow}>
        <Text style={[styles.label, { color: C.textMuted }]}>Amount</Text>
        <TouchableOpacity onPress={handleSwap} style={[styles.swapBtn, { backgroundColor: C.surfaceHighlight }]}>
          <Text style={{ color: C.foreground, fontSize: 12 }}>⇅ Swap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputRow}>
        <Text style={[styles.primarySymbol, { color: C.foreground }]}>{primarySymbol}</Text>
        <TextInput
          value={amount}
          onChangeText={handleChange}
          placeholder="0.00"
          placeholderTextColor={C.textSubtle}
          keyboardType="decimal-pad"
          style={[styles.input, { color: C.foreground }]}
        />
      </View>
      <View style={styles.bottomRow}>
        <Text style={[styles.secondaryAmount, { color: C.textMuted }]}>
          ≈ 0.00 {secondarySymbol}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: BORDER_RADIUS, borderWidth: 1 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '500' },
  swapBtn: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  primarySymbol: { fontSize: 24, fontWeight: '600' },
  input: { flex: 1, fontSize: 36, fontWeight: '700', letterSpacing: -1 },
  bottomRow: { marginTop: 8 },
  secondaryAmount: { fontSize: 13 },
});
