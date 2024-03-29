import { Text } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  const screenOptions = (
    route: RouteProp<ParamListBase, string>
  ): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'blue',

    tabBarLabel: ({ focused }) => <></>,
  })

  return (
    <Tab.Navigator screenOptions={({ route }) => screenOptions(route)}>
      <Tab.Screen name='Home' component={() => <Text>Hello</Text>} />
    </Tab.Navigator>
  )
}

export default TabNavigator
