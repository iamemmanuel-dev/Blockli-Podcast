import { FlexAlignType, ViewStyle } from 'react-native'
import { JustifyContent, UIViewPropTypes } from '@UILibrary/UIView/interface'

const useUIViewComposedStyles = <P extends UIViewPropTypes>(props: P) => {
  let justifyContent: JustifyContent
  let alignItems: FlexAlignType | undefined

  if (props.center) {
    justifyContent = 'center'
  } else if (props.justify) {
    justifyContent = props.justify
  } else {
    justifyContent = 'flex-start'
  }

  if (props.center) {
    alignItems = 'center'
  } else if (props.align) {
    alignItems = props.align
  }

  const defaultSyles: ViewStyle = {
    flex: props.flex,
    alignItems,
    justifyContent,
    flexDirection: props.flexDir,
    columnGap: props.gap ?? props.colGap,
    rowGap: props.gap ?? props.rowGap,
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
    borderTopLeftRadius: props.borderTopLeftRadius,
    borderBottomLeftRadius: props.borderBottomLeftRadius,
    borderTopRightRadius: props.borderTopRightRadius,
    borderBottomRightRadius: props.borderBottomRightRadius,
    borderTopWidth: props.borderTop,
    borderBottomWidth: props.borderBottom,
    borderRightWidth: props.borderRight,
    borderLeftWidth: props.borderLeft,
    backgroundColor: props.bgCol,
    padding: props.padding,
    margin: props.margin,
    paddingHorizontal: props.px,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingVertical: props.py,
    marginBottom: props.mb,
    marginTop: props.mt,
    marginVertical: props.my,
    marginHorizontal: props.mx,
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    borderStyle: props.borderStyle,
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    flexBasis: props.flexBasis,
    position: props.position,
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
    zIndex: props.zIndex,
    overflow: props.overflow,
    marginRight: props.mr,
    marginLeft: props.ml,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    alignSelf: props.alignSelf,
  }

  return { defaultSyles }
}

export default useUIViewComposedStyles
