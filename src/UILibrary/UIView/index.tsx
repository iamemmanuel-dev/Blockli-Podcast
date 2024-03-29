import { StyleSheet, View } from 'react-native'
import useUIViewComposedStyles from '@hooks/useUIViewComposedStyles'
import { UIViewPropTypes } from './interface'

const UIView: React.FC<UIViewPropTypes> = props => {
  const { defaultSyles } = useUIViewComposedStyles(props)
  const computedStyles = StyleSheet.compose(defaultSyles, props.style)

  return (
    <View {...props} style={computedStyles}>
      {props.children}
    </View>
  )
}

export default UIView
