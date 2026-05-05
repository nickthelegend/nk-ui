// components/ui/wallet-address.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

interface WalletAddressProps {
  address: string;
  label?: string;
  truncate?: boolean;
}

function truncateAddress(addr: string) {
  if (addr.length <= 12) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function WalletAddress({ address, label, truncate = true }: WalletAddressProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const [copied, setCopied] = useState(false);

  const copy = () => {
    Clipboard.setString(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={{ color: C.textMuted, fontSize: 11, marginBottom: 4 }}>{label}</Text>}
      <TouchableOpacity
        onPress={copy}
        style={[styles.pill, { backgroundColor: C.surface, borderColor: C.border }]}
        activeOpacity={0.7}
      >
        <Text style={[styles.address, { color: C.foreground }]}>
          {truncate ? truncateAddress(address) : address}
        </Text>
        <View style={[styles.copyBadge, { backgroundColor: copied ? C.success + '33' : C.muted }]}>
          <Text style={{ color: copied ? C.success : C.textMuted, fontSize: 11 }}>
            {copied ? '✓' : '⧉'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  pill: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 999, borderWidth: 1, alignSelf: 'flex-start',
  },
  address: { fontSize: 13, fontFamily: 'monospace', fontWeight: '500' },
  copyBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999 },
});
