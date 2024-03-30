import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type ScreensParamList = {
  AllSubscriptionsScreen: undefined
  AllNewUpdatesScreen: undefined
}

export type NavigationProp = NativeStackScreenProps<ScreensParamList>
export type useNavigationProp = NativeStackNavigationProp<ScreensParamList>
