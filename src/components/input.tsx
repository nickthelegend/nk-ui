// components/ui/input.tsx
import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { INPUT_RADIUS, HEIGHT } from '@/theme/globals';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightElement,
  containerStyle,
  style,
  ...props
}: InputProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];
  const [focused, setFocused] = useState(false);

  return (
    <View style={[{ gap: 6 }, containerStyle]}>
      {label && (
        <Text style={{ color: C.textMuted, fontSize: 13, fontWeight: '500', marginLeft: 4 }}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {
            backgroundColor: C.input,
            borderColor: error ? C.destructive : focused ? C.primary : C.inputBorder,
            borderRadius: INPUT_RADIUS,
            height: HEIGHT,
          },
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          placeholderTextColor={C.textSubtle}
          style={[
            styles.input,
            {
              color: C.text,
              flex: 1,
              paddingLeft: leftIcon ? 0 : 16,
              paddingRight: rightElement ? 0 : 16,
            },
            style,
          ]}
        />
        {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
      </View>
      {error && <Text style={{ color: C.destructive, fontSize: 12, marginLeft: 4 }}>{error}</Text>}
      {hint && !error && <Text style={{ color: C.textMuted, fontSize: 12, marginLeft: 4 }}>{hint}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  leftIcon: { paddingHorizontal: 12 },
  rightElement: { paddingHorizontal: 12 },
  input: { fontSize: 15, fontWeight: '400' },
});
