import { View, StyleSheet, ScrollView } from 'react-native';
import { useColor } from '@/hooks/useColor';
import { BalanceCard } from '@/components/ui/balance-card';
import { ServiceGrid } from '@/components/ui/service-grid';

export default function TabOneScreen() {
  const c = useColor();

  return (
    <ScrollView style={[styles.container, { backgroundColor: c.background }]}>
      <View style={styles.content}>
        <BalanceCard 
          balance="$4,067"
          localBalance="₦152,730"
          tokenBalance="0.1128 USDC"
          username="nickthelegend"
        />

        <ServiceGrid 
          services={[
            { id: '1', label: 'Airtime', icon: '📱' },
            { id: '2', label: 'Internet', icon: '🌐' },
            { id: '3', label: 'Transport', icon: '🚗' },
            { id: '4', label: 'Bet', icon: '🎲' }
          ]}
          style={{ marginTop: 24 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  }
});
