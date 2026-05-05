import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS } from '@/theme/globals';

interface QRScannerProps {
  onScan?: (data: string) => void;
  style?: ViewStyle;
}

export function QRScanner({ onScan, style }: QRScannerProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  // Placeholder for camera component. In a real app, you would use expo-camera or react-native-vision-camera
  return (
    <View style={[styles.container, { backgroundColor: '#000' }, style]}>
      <View style={styles.cameraPlaceholder}>
        <Text style={{ color: '#fff', opacity: 0.5 }}>Camera View</Text>
      </View>
      
      {/* Overlay */}
      <View style={styles.overlay}>
        <View style={styles.scanArea}>
          <View style={[styles.corner, styles.topLeft, { borderColor: C.primary }]} />
          <View style={[styles.corner, styles.topRight, { borderColor: C.primary }]} />
          <View style={[styles.corner, styles.bottomLeft, { borderColor: C.primary }]} />
          <View style={[styles.corner, styles.bottomRight, { borderColor: C.primary }]} />
        </View>
        <Text style={[styles.instruction, { color: '#fff' }]}>Align QR code within frame</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, borderRadius: BORDER_RADIUS, overflow: 'hidden', position: 'relative' },
  cameraPlaceholder: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  overlay: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  scanArea: { width: 250, height: 250, position: 'relative', backgroundColor: 'transparent' },
  corner: { position: 'absolute', width: 40, height: 40, borderColor: '#fff' },
  topLeft: { top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 16 },
  topRight: { top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 16 },
  bottomLeft: { bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 16 },
  bottomRight: { bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 16 },
  instruction: { marginTop: 40, fontSize: 14, fontWeight: '500' },
});
