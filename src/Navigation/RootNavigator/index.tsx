import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//SCREENS IMPORT
import TabNavigator from '../TabNavigator'
import SubscriptionsScreen from '@dashboardScreens/Subscriptions'
import AllNewUpdatesScreen from 'src/Screens/Dashboard/AllNewUpdates'

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

        <Stack.Screen
          name='AllNewUpdatesScreen'
          component={AllNewUpdatesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
