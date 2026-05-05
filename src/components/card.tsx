// components/ui/card.tsx
import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BORDER_RADIUS, SHADOW_MD } from '@/theme/globals';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevated?: boolean;
  padding?: number;
  noBorder?: boolean;
}

export function Card({ children, style, elevated = false, padding = 16, noBorder = false }: CardProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  return (
    <View
      style={[
        {
          backgroundColor: C.card,
          borderRadius: BORDER_RADIUS,
          padding,
          borderWidth: noBorder ? 0 : 1,
          borderColor: C.border,
        },
        elevated && SHADOW_MD,
        style,
      ]}
    >
      {children}
    </View>
  );
}
