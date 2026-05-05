// theme/colors.ts
// NickTheLegend UI — Dark Fintech Design System

const darkColors = {
  // === BACKGROUNDS ===
  background: '#000000',
  backgroundSecondary: '#0D0D0D',
  surface: '#1A1A1A',
  surfaceElevated: '#1C1C1E',
  surfaceHighlight: '#252525',

  // === FOREGROUNDS ===
  foreground: '#FFFFFF',
  foregroundSecondary: '#E5E5EA',

  // === CARD ===
  card: '#1C1C1E',
  cardForeground: '#FFFFFF',

  // === POPOVER ===
  popover: '#1C1C1E',
  popoverForeground: '#FFFFFF',

  // === PRIMARY (Amber-Orange Accent — Airbills DNA) ===
  primary: '#C47A2B',
  primaryGradientStart: '#C47A2B',
  primaryGradientEnd: '#E8952E',
  primaryForeground: '#FFFFFF',

  // === SECONDARY ===
  secondary: '#252525',
  secondaryForeground: '#FFFFFF',

  // === CTA ORANGE (FABs, strong CTAs) ===
  cta: '#FF7A00',
  ctaForeground: '#FFFFFF',

  // === MUTED ===
  muted: '#2C2C2E',
  mutedForeground: '#8A8A8E',

  // === ACCENT ===
  accent: '#2C2C2E',
  accentForeground: '#FFFFFF',

  // === SEMANTIC ===
  destructive: '#FF453A',
  destructiveForeground: '#FFFFFF',
  success: '#22C55E',
  successForeground: '#FFFFFF',
  warning: '#FF9F0A',
  warningForeground: '#000000',
  info: '#0A84FF',
  infoForeground: '#FFFFFF',

  // === BORDERS ===
  border: '#2C2C2E',
  borderSubtle: '#1C1C1E',
  input: '#1C1C1E',
  inputBorder: '#38383A',
  ring: '#C47A2B',

  // === TEXT ===
  text: '#FFFFFF',
  textMuted: '#8A8A8E',
  textSubtle: '#6B6B6E',

  // === LEGACY (hook compat) ===
  tint: '#C47A2B',
  icon: '#8A8A8E',
  tabIconDefault: '#6B6B6E',
  tabIconSelected: '#C47A2B',

  // === SEMANTIC COLORS ===
  blue: '#0A84FF',
  green: '#30D158',
  red: '#FF453A',
  orange: '#FF9F0A',
  yellow: '#FFD60A',
  pink: '#FF375F',
  purple: '#BF5AF2',
  teal: '#64D2FF',
  indigo: '#5E5CE6',

  // === CRYPTO SPECIFIC ===
  usdc: '#2775CA',
  sol: '#9945FF',
  eth: '#627EEA',
  btc: '#F7931A',
};

// Light mode — minimal (optional, your app is dark-first)
const lightColors = {
  background: '#F2F2F7',
  backgroundSecondary: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceElevated: '#F2F2F7',
  surfaceHighlight: '#E5E5EA',
  foreground: '#000000',
  foregroundSecondary: '#1C1C1E',
  card: '#FFFFFF',
  cardForeground: '#000000',
  popover: '#FFFFFF',
  popoverForeground: '#000000',
  primary: '#C47A2B',
  primaryGradientStart: '#C47A2B',
  primaryGradientEnd: '#E8952E',
  primaryForeground: '#FFFFFF',
  secondary: '#F2F2F7',
  secondaryForeground: '#000000',
  cta: '#FF7A00',
  ctaForeground: '#FFFFFF',
  muted: '#E5E5EA',
  mutedForeground: '#6B6B6E',
  accent: '#F2F2F7',
  accentForeground: '#000000',
  destructive: '#FF3B30',
  destructiveForeground: '#FFFFFF',
  success: '#34C759',
  successForeground: '#FFFFFF',
  warning: '#FF9500',
  warningForeground: '#000000',
  info: '#007AFF',
  infoForeground: '#FFFFFF',
  border: '#C6C6C8',
  borderSubtle: '#E5E5EA',
  input: '#FFFFFF',
  inputBorder: '#C6C6C8',
  ring: '#C47A2B',
  text: '#000000',
  textMuted: '#6B6B6E',
  textSubtle: '#8E8E93',
  tint: '#C47A2B',
  icon: '#6B6B6E',
  tabIconDefault: '#8E8E93',
  tabIconSelected: '#C47A2B',
  blue: '#007AFF',
  green: '#34C759',
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  pink: '#FF2D92',
  purple: '#AF52DE',
  teal: '#5AC8FA',
  indigo: '#5856D6',
  usdc: '#2775CA',
  sol: '#9945FF',
  eth: '#627EEA',
  btc: '#F7931A',
};

export const Colors = { light: lightColors, dark: darkColors };
export { darkColors, lightColors };
export type ColorKeys = keyof typeof darkColors;
