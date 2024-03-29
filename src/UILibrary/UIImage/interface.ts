import { AnimatableNumericValue, DimensionValue } from 'react-native'
import { ImageProps } from 'expo-image'

export interface UIImagePropTypes extends ImageProps {
  width?: DimensionValue | undefined
  height?: DimensionValue | undefined
  radius?: AnimatableNumericValue | undefined
}
