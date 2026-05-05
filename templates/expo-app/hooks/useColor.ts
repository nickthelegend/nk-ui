import { Colors } from '@/theme/colors';
import { useColorScheme } from './useColorScheme';

export function useColor() {
  const scheme = useColorScheme() ?? 'dark';
  return Colors[scheme];
}
