import { Tabs } from 'expo-router';
import { useColor } from '@/hooks/useColor';

export default function TabLayout() {
  const c = useColor();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: c.primary,
        tabBarStyle: { backgroundColor: c.background, borderTopColor: c.border },
        headerStyle: { backgroundColor: c.background },
        headerTintColor: c.text,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="send"
        options={{
          title: 'Send',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
