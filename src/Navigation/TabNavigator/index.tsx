import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native'

import HomeScreen from '@dashboardScreens/Home'
import DiscoverScreen from '@dashboardScreens/Discover'
import LibraryScreen from '@dashboardScreens/Library'
import ProfileScreen from '@dashboardScreens/Profile'

import { CompassIcon, HomeIcon, ListIcon, UserIcon } from '@appIcons'
import UIText from '@UILibrary/UIText'
import theme from '@theme'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  const screenOptions = (
    route: RouteProp<ParamListBase, string>
  ): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarActiveTintColor: theme.primary,
    tabBarInactiveTintColor: theme.grey1,

    tabBarLabel: ({ focused }) => (
      <UIText
        family={focused ? 'Urbanist_Bold' : 'Urbanist_Medium'}
        size={10}
        lineHeight={16}
        color={focused ? theme.primary : theme.grey1}
      >
        {route.name}
      </UIText>
    ),
  })

  return (
    <Tab.Navigator screenOptions={({ route }) => screenOptions(route)}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{ tabBarIcon: ({ color }) => <CompassIcon color={color} /> }}
      />
      <Tab.Screen
        name='Library'
        component={LibraryScreen}
        options={{ tabBarIcon: ({ color }) => <ListIcon color={color} /> }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <UserIcon color={color} /> }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
