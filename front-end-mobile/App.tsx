import './src/lib/dayjs';
import { StatusBar } from 'react-native';

import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold
 } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  // as fontes precisa carregar antes do app ser renderizado
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}

