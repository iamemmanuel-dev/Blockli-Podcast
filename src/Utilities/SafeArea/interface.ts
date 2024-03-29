import { UIViewPropTypes } from '@UILibrary/UIView/interface'

export interface SafeAreaPropTypes
  extends Pick<UIViewPropTypes, 'flex' | 'bgCol' | 'style' | 'children'> {}
