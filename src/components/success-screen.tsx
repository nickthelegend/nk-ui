import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { Button } from './button';

interface SuccessScreenProps {
  title?: string;
  subtitle?: string;
  onDone?: () => void;
  style?: ViewStyle;
}

export function SuccessScreen({ 
  title = 'Success!', 
  subtitle = 'Your transaction was completed successfully.',
  onDone,
  style 
}: SuccessScreenProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View style={[styles.container, { backgroundColor: C.background }, style]}>
      <View style={styles.content}>
        <View style={[styles.iconCircle, { backgroundColor: C.success + '22', borderColor: C.success }]}>
          <Text style={{ color: C.success, fontSize: 48, fontWeight: '700' }}>✓</Text>
        </View>
        <Text style={[styles.title, { color: C.foreground }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: C.textMuted }]}>{subtitle}</Text>
      </View>
      <View style={styles.footer}>
        <Button variant="primary" size="lg" fullWidth onPress={onDone}>Done</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  iconCircle: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  title: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 15, textAlign: 'center', paddingHorizontal: 20 },
  footer: { paddingBottom: 20 },
});
