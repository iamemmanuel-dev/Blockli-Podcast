import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type ScreensParamList = {
  SubscriptionsScreen: undefined
}

export type NavigationProp = NativeStackScreenProps<ScreensParamList>
export type useNavigationProp = NativeStackNavigationProp<ScreensParamList>
