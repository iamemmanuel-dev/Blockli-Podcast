import { PressableProps } from 'react-native'
import { UIViewPropTypes } from '@UILibrary/UIView/interface'

export interface UIPressablePropTypes
  extends Pick<PressableProps, 'onPress' | 'disabled' | 'hitSlop'>,
    UIViewPropTypes {}
