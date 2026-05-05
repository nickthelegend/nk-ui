// components/ui/button.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';
import { BUTTON_HEIGHT, PILL_RADIUS, SHADOW_LG } from '@/theme/globals';

type Variant = 'default' | 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'success';
type Size = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const scheme = useColorScheme() ?? 'dark';
  const C = Colors[scheme];

  const sizeStyles: Record<Size, ViewStyle> = {
    sm: { height: 38, paddingHorizontal: 16, borderRadius: 10 },
    md: { height: BUTTON_HEIGHT, paddingHorizontal: 24, borderRadius: PILL_RADIUS },
    lg: { height: 60, paddingHorizontal: 32, borderRadius: PILL_RADIUS },
    icon: { height: 44, width: 44, borderRadius: 22, paddingHorizontal: 0 },
  };

  const textSizes: Record<Size, number> = { sm: 14, md: 16, lg: 18, icon: 16 };

  if (variant === 'primary' || variant === 'default') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.82}
        style={[fullWidth && { width: '100%' }, style]}
      >
        <LinearGradient
          colors={[C.primaryGradientStart, C.primaryGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.base,
            sizeStyles[size],
            disabled && { opacity: 0.5 },
            SHADOW_LG,
          ]}
        >
          {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={[styles.text, { fontSize: textSizes[size] }, textStyle]}>
              {children}
            </Text>
          )}
          {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  const variantStyles: Record<string, ViewStyle> = {
    secondary: { backgroundColor: C.secondary, borderWidth: 0 },
    destructive: { backgroundColor: C.destructive },
    ghost: { backgroundColor: 'transparent' },
    outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: C.border },
    success: { backgroundColor: C.success },
  };

  const variantTextColor: Record<string, string> = {
    secondary: C.foreground,
    destructive: '#fff',
    ghost: C.foreground,
    outline: C.foreground,
    success: '#fff',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.75}
      style={[
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        disabled && { opacity: 0.5 },
        fullWidth && { width: '100%' },
        style,
      ]}
    >
      {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
      {loading ? (
        <ActivityIndicator color={variantTextColor[variant]} size="small" />
      ) : (
        <Text style={[styles.text, { color: variantTextColor[variant], fontSize: textSizes[size] }, textStyle]}>
          {children}
        </Text>
      )}
      {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
