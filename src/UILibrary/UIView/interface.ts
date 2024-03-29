import {
  AnimatableNumericValue,
  ColorValue,
  DimensionValue,
  FlexAlignType,
  ViewProps,
} from 'react-native'

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface UIViewPropTypes extends Omit<ViewProps, 'hitSlop'> {
  flex?: number
  align?: FlexAlignType | undefined
  justify?: JustifyContent
  center?: boolean
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined
  colGap?: number | undefined
  rowGap?: number | undefined
  wrap?: boolean
  gap?: number | undefined
  flexBasis?: DimensionValue | undefined

  width?: DimensionValue | undefined
  height?: DimensionValue | undefined
  radius?: AnimatableNumericValue | undefined
  borderTopLeftRadius?: AnimatableNumericValue | undefined
  borderTopRightRadius?: AnimatableNumericValue | undefined
  borderBottomLeftRadius?: AnimatableNumericValue | undefined
  borderBottomRightRadius?: AnimatableNumericValue | undefined
  borderRight?: number | undefined
  borderLeft?: number | undefined
  borderBottom?: number | undefined
  borderTop?: number | undefined
  borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined
  bgCol?: ColorValue | undefined
  margin?: DimensionValue | undefined
  padding?: DimensionValue | undefined
  mb?: DimensionValue | undefined
  mt?: DimensionValue | undefined
  pb?: DimensionValue | undefined
  pt?: DimensionValue | undefined
  px?: DimensionValue | undefined
  py?: DimensionValue | undefined
  mx?: DimensionValue | undefined
  my?: DimensionValue | undefined
  mr?: DimensionValue | undefined
  ml?: DimensionValue | undefined
  pr?: DimensionValue | undefined
  pl?: DimensionValue | undefined
  borderWidth?: number | undefined
  borderColor?: ColorValue | undefined
  position?: 'absolute' | 'relative' | undefined
  top?: number
  bottom?: number
  left?: number
  right?: number
  zIndex?: number | undefined
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined
  alignSelf?: 'auto' | FlexAlignType | undefined
}
