import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

export function HabitEmpty() {
  const { navigate } = useNavigation();
  return (
    <Text
      className='text-zinc-400 text-base'
    >
      Você ainda não está monitorando nenhum hábito{' '}
      <Text
        className='text-sky-400 text-base underline active:text-blue-500'
        onPress={() => navigate('new')}
      >
        Comece criando um hábito.
      </Text>
    </Text>
  )
}