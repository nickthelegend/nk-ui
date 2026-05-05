import { View, Text, StyleSheet } from 'react-native';
import { useColor } from '@/hooks/useColor';

export default function HistoryScreen() {
  const c = useColor();

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <Text style={{ color: c.text }}>Transaction History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
