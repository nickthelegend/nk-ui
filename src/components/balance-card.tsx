// components/ui/balance-card.tsx — Airbills-style "$4,067" balance card
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS } from '@/theme/globals';

interface BalanceCardProps {
  balance: string;              // e.g. "$4,067"
  localBalance?: string;        // e.g. "₦152,730"
  tokenBalance?: string;        // e.g. "0.1128 USDC"
  token?: string;
  onSend?: () => void;
  onReceive?: () => void;
  onTokenPress?: () => void;
  showBalance?: boolean;
  onToggleBalance?: () => void;
  username?: string;
  style?: ViewStyle;
}

export function BalanceCard({
  balance,
  localBalance,
  tokenBalance,
  token = 'USDC',
  onSend,
  onReceive,
  onTokenPress,
  showBalance = true,
  onToggleBalance,
  username,
  style,
}: BalanceCardProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View style={[styles.card, { backgroundColor: C.card, borderColor: C.border }, style]}>
      {/* Top row */}
      <View style={styles.topRow}>
        {username ? (
          <TouchableOpacity style={[styles.usernamePill, { backgroundColor: C.surface }]}>
            <View style={[styles.avatar, { backgroundColor: C.primary }]} />
            <Text style={[styles.usernameText, { color: C.textMuted }]}>{username}</Text>
          </TouchableOpacity>
        ) : <View />}
        {/* Token selector */}
        <TouchableOpacity
          onPress={onTokenPress}
          style={[styles.tokenPill, { backgroundColor: C.surface, borderColor: C.border }]}
        >
          <View style={[styles.tokenDot, { backgroundColor: C.usdc ?? C.primary }]} />
          <Text style={[styles.tokenText, { color: C.foreground }]}>{token}</Text>
          {tokenBalance && (
            <Text style={[styles.tokenBalance, { color: C.textMuted }]}>{tokenBalance}</Text>
          )}
          <Text style={{ color: C.textMuted, fontSize: 10 }}>▾</Text>
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <View style={styles.balanceSection}>
        <Text style={[styles.balanceLabel, { color: C.textMuted }]}>Balance</Text>
        <TouchableOpacity onPress={onToggleBalance} style={styles.balanceRow}>
          <Text style={[styles.balanceMain, { color: C.foreground }]}>
            {showBalance ? balance : '••••••'}
          </Text>
          <Text style={{ color: C.textMuted, fontSize: 16, marginLeft: 8 }}>
            {showBalance ? '◉' : '◎'}
          </Text>
        </TouchableOpacity>
        {localBalance && (
          <Text style={[styles.balanceSub, { color: C.textMuted }]}>≈ {localBalance}</Text>
        )}
      </View>

      {/* Action buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onSend}
          style={[styles.actionBtn, { backgroundColor: C.surface, borderColor: C.border }]}
        >
          <Text style={[styles.actionIcon, { color: C.foreground }]}>↗</Text>
          <Text style={[styles.actionLabel, { color: C.textMuted }]}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onReceive}
          style={[styles.actionBtn, { backgroundColor: C.surface, borderColor: C.border }]}
        >
          <Text style={[styles.actionIcon, { color: C.foreground }]}>↙</Text>
          <Text style={[styles.actionLabel, { color: C.textMuted }]}>Receive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BORDER_RADIUS,
    padding: 20,
    borderWidth: 1,
    gap: 16,
  },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  usernamePill: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 10, paddingVertical: 6,
    borderRadius: 999, gap: 6,
  },
  avatar: { width: 20, height: 20, borderRadius: 10 },
  usernameText: { fontSize: 13, fontWeight: '500' },
  tokenPill: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 10, paddingVertical: 6,
    borderRadius: 999, borderWidth: 1, gap: 5,
  },
  tokenDot: { width: 8, height: 8, borderRadius: 4 },
  tokenText: { fontSize: 13, fontWeight: '600' },
  tokenBalance: { fontSize: 11 },
  balanceSection: { gap: 2 },
  balanceLabel: { fontSize: 13 },
  balanceRow: { flexDirection: 'row', alignItems: 'center' },
  balanceMain: { fontSize: 40, fontWeight: '700', letterSpacing: -1 },
  balanceSub: { fontSize: 13, marginTop: 2 },
  actions: { flexDirection: 'row', gap: 12 },
  actionBtn: {
    flex: 1, alignItems: 'center', paddingVertical: 14,
    borderRadius: 14, borderWidth: 1, gap: 4,
  },
  actionIcon: { fontSize: 20, fontWeight: '600' },
  actionLabel: { fontSize: 12, fontWeight: '500' },
});
