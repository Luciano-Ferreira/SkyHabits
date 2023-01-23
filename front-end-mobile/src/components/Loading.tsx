import { ActivityIndicator, View } from 'react-native';
import colors from 'tailwindcss/colors';

export function Loading () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#09090A' }}>
      <ActivityIndicator color={colors.sky[500]} />
    </View>
  )
}