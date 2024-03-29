import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type ScreensParamList = {}

export type NavigationProp = NativeStackScreenProps<ScreensParamList>
export type useNavigationProp = NativeStackNavigationProp<ScreensParamList>
