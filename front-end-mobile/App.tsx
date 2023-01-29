import './src/lib/dayjs';
import { Button, StatusBar } from 'react-native';
import * as Notifications from 'expo-notifications'

import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold
 } from '@expo-google-fonts/inter';
 
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  }),
})

export default function App() {
  // as fontes precisa carregar antes do app ser renderizado
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  async function getScheduleNotification() {
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    console.log(schedules)
  }

  async function setScheduleNotification() {
    const trigger = new Date(Date.now());

    trigger.setMinutes(trigger.getMinutes() + 1);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Olá 🥲',
        body: 'Você já praticou algum SkyHabit hoje?'
      },
      trigger
    });
  }


  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <>
      {/**<Button title='Enviar notificação'  onPress={setScheduleNotification} /> */}
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}

