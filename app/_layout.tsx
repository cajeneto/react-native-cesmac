import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';

// Este é o componente de Layout Raiz.
// Ele envolve todas as suas telas.
export default function RootLayout() {
  // A importação 'react-native-gesture-handler' na primeira linha já resolve o problema de toque.

  // O componente <Slot /> do Expo Router renderiza a tela atual.
  // Neste caso, ele vai renderizar o seu 'app/index.tsx'.
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
