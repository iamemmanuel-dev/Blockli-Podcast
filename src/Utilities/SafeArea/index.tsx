import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaPropTypes } from './interface'

const SafeArea: React.FC<SafeAreaPropTypes> = props => {
  const composedStyles = StyleSheet.compose(
    {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      flex: props.flex,
      backgroundColor: props.bgCol,
    },
    props.style
  )

  return (
    <SafeAreaView style={composedStyles} {...props}>
      {props.children}
    </SafeAreaView>
  )
}

export default SafeArea
