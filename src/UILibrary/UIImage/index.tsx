import { Image, ImageStyle } from 'expo-image'
import { IMAGE_BLURHASH } from '@constants'
import { UIImagePropTypes } from './interface'

const UIImage: React.FC<UIImagePropTypes> = props => {
  const styles: ImageStyle = {
    height: props.height ?? '100%',
    width: props.width ?? '100%',
    borderRadius: props.radius,
  }

  return (
    <Image
      placeholder={IMAGE_BLURHASH}
      contentFit='cover'
      transition={0}
      style={styles}
      {...props}
    />
  )
}

export default UIImage
