/**
 * The wrapper component simply applies an horizontal padding and optional bottom padding to its containing elements
 */
import UIView from '@UILibrary/UIView'
import metrics from '@metrics'
import { WrapperPropTypes } from './interface'

const Wrapper: React.FC<WrapperPropTypes> = props => {
  return (
    <UIView
      px={metrics.SCREEN_HORIZONTAL_PADDING}
      pb={props.addBottomPadding ? metrics.SCREEN_BOTTOM_PADDING : 0}
      style={props.style}
      {...props}
    >
      {props.children}
    </UIView>
  )
}

export default Wrapper
