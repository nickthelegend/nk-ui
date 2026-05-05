// components/ui/service-grid.tsx
// Airbills-style services grid: Airtime, Internet, Transport, Bet, etc.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

interface Service {
  id: string;
  label: string;
  icon: string; // emoji or icon name
  onPress?: () => void;
  badge?: string;
}

interface ServiceGridProps {
  services: Service[];
  columns?: number;
  style?: ViewStyle;
}

export function ServiceGrid({ services, columns = 4, style }: ServiceGridProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View style={style}>
      <View style={[styles.grid, { gap: 10 }]}>
        {services.map((s) => (
          <TouchableOpacity
            key={s.id}
            onPress={s.onPress}
            activeOpacity={0.7}
            style={[
              styles.serviceItem,
              { backgroundColor: C.surface, borderColor: C.border },
              { width: `${(100 / columns) - 2}%` },
            ]}
          >
            {s.badge && (
              <View style={[styles.badge, { backgroundColor: C.destructive }]}>
                <Text style={styles.badgeText}>{s.badge}</Text>
              </View>
            )}
            <Text style={styles.serviceIcon}>{s.icon}</Text>
            <Text style={[styles.serviceLabel, { color: C.textMuted }]}>{s.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  serviceItem: {
    aspectRatio: 1, borderRadius: 14, borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    gap: 6, position: 'relative',
  },
  serviceIcon: { fontSize: 24 },
  serviceLabel: { fontSize: 11, fontWeight: '500' },
  badge: {
    position: 'absolute', top: 6, right: 6,
    width: 8, height: 8, borderRadius: 4,
  },
  badgeText: { fontSize: 8, color: '#fff', fontWeight: '700' },
});
