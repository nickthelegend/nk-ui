import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

export function Text(props: TextProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <RNText {...props} style={[{ color: C.foreground }, props.style]} />
  );
}
