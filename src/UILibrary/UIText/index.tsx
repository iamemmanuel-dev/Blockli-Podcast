import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { UITextPropTypes } from './interface'

const UIText: React.FC<UITextPropTypes> = props => {
  const defaultStyles: TextStyle = {
    fontFamily: props.family,
    fontSize: props.size,
    color: props.color,
    lineHeight: props.lineHeight,
    letterSpacing: props.letterSpacing ?? 0.2,
    textAlign: props.center ? 'center' : props.align,
    marginBottom: props.mb ?? 0,
    maxWidth: props.maxWidth,
    textDecorationLine: props.td,
    flex: props.flex,
    alignSelf: props.alignSelf,
  }

  const computedStyles = StyleSheet.compose(
    defaultStyles,
    props.style
  ) as StyleProp<TextStyle>

  return (
    <Text {...props} style={computedStyles} allowFontScaling={false}>
      {props.children}
    </Text>
  )
}

export default UIText
