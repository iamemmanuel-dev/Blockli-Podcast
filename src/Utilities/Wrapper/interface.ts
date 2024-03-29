import { ViewStyle } from 'react-native'
import { UIViewPropTypes } from '@UILibrary/UIView/interface'

export interface WrapperPropTypes extends UIViewPropTypes {
  children: React.ReactNode
  addBottomPadding?: boolean
  style?: ViewStyle
  flex?: number | undefined
  zIndex?: number | undefined
}
