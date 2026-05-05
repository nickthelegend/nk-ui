const fs = require('fs');
const path = require('path');

const REGISTRY = [
  'accordion', 'action-sheet', 'alert', 'alert-dialog', 'audio-player', 
  'audio-recorder', 'audio-waveform', 'avatar', 'avoid-keyboard', 
  'bottom-sheet', 'camera', 'camera-preview', 'carousel', 'checkbox', 
  'collapsible', 'color-picker', 'combobox', 'date-picker', 'file-picker', 
  'gallery', 'hello-wave', 'icon', 'image', 'input-otp', 'link', 
  'media-picker', 'mode-toggle', 'onboarding', 'parallax-scroll-view', 
  'picker', 'popover', 'progress', 'radio', 'scroll-view', 'searchbar', 
  'separator', 'share', 'sheet', 'skeleton', 'spinner', 'switch', 'table', 
  'tabs', 'text', 'toast', 'toggle', 'video', 'view',
  // Charts
  'area-chart', 'bar-chart', 'bubble-chart', 'candlestick-chart', 
  'chart-container', 'column-chart', 'doughnut-chart', 'heatmap-chart', 
  'line-chart', 'pie-chart', 'polar-area-chart', 'progress-ring-chart', 
  'radar-chart', 'radial-bar-chart', 'scatter-chart', 'stacked-area-chart', 
  'stacked-bar-chart', 'tree-map-chart'
];

const componentsDir = path.join(__dirname, 'src', 'components');

REGISTRY.forEach(comp => {
  const filePath = path.join(componentsDir, `${comp}.tsx`);
  if (!fs.existsSync(filePath)) {
    const compName = comp.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const content = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

export function ${compName}() {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View style={[styles.container, { backgroundColor: C.surface, borderColor: C.border }]}>
      <Text style={{ color: C.foreground }}>${compName} Component (Stub)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
});
`;
    fs.writeFileSync(filePath, content);
  }
});

console.log('Stubs generated successfully.');
