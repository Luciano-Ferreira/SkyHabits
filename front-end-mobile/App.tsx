import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold
 } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  // as fontes precisa carregar antes do app ser renderizado
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold
  });

  if (fontsLoaded) {
    <Loading />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter_800ExtraBold'
  }
});
