import React from 'react';
import { View as RNView, StyleSheet, ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

export function View(props: ViewProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <RNView {...props} style={[{ backgroundColor: C.surface }, props.style]} />
  );
}
