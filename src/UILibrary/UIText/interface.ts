import {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  TextProps,
} from 'react-native'

type AppFontFamily =
  | 'Urbanist_Regular'
  | 'Urbanist_Medium'
  | 'Urbanist_SemiBold'
  | 'Urbanist_Bold'

export interface UITextPropTypes extends TextProps {
  family?: AppFontFamily
  size?: number
  lineHeight?: number | undefined
  color?: ColorValue
  letterSpacing?: number
  center?: boolean
  align?: 'center' | 'left' | 'auto' | 'right' | 'justify' | undefined
  mb?: number
  maxWidth?: DimensionValue | undefined
  td?:
    | 'underline'
    | 'none'
    | 'line-through'
    | 'underline line-through'
    | undefined
  flex?: number | undefined
  alignSelf?: 'auto' | FlexAlignType | undefined
}
