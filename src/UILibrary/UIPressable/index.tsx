import { Pressable, StyleSheet } from 'react-native'
import useUIViewComposedStyles from '@hooks/useUIViewComposedStyles'
import { UIPressablePropTypes } from './interface'

const UIPressable: React.FC<UIPressablePropTypes> = props => {
  const { defaultSyles } = useUIViewComposedStyles(props)
  const styles = StyleSheet.compose(defaultSyles, props.style)

  return (
    <Pressable {...props} style={styles}>
      {props.children}
    </Pressable>
  )
}

export default UIPressable
