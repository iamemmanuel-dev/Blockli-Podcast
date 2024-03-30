import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//SCREENS IMPORT
import TabNavigator from '../TabNavigator'
import SubscriptionsScreen from '@dashboardScreens/Subscriptions'

const RootNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={TabNavigator} />

        <Stack.Screen
          name='SubscriptionsScreen'
          component={SubscriptionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
