import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//SCREENS IMPORT
import TabNavigator from '../TabNavigator'
import AllSubscriptionsScreen from '@dashboardScreens/AllSubscriptions'
import AllNewUpdatesScreen from '@dashboardScreens/AllNewUpdates'
import SearchScreen from '@dashboardScreens/Discover/subscreens/Search'
import SearchResultScreen from '@dashboardScreens/Discover/subscreens/SearchResult'

const RootNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={TabNavigator} />

        <Stack.Screen
          name='AllSubscriptionsScreen'
          component={AllSubscriptionsScreen}
        />

        <Stack.Screen
          name='AllNewUpdatesScreen'
          component={AllNewUpdatesScreen}
        />

        <Stack.Screen name='SearchScreen' component={SearchScreen} />

        <Stack.Screen
          name='SearchResultScreen'
          component={SearchResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
