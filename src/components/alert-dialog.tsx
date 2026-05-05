import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

export function AlertDialog() {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View style={[styles.container, { backgroundColor: C.surface, borderColor: C.border }]}>
      <Text style={{ color: C.foreground }}>AlertDialog Component (Stub)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
});
