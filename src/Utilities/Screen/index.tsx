import UIView from '@UILibrary/UIView'
import theme from '@theme'
import { ScreenPropTypes } from './interface'

const Screen: React.FC<ScreenPropTypes> = props => {
  return (
    <UIView flex={1} bgCol={theme.white}>
      {props.children}
    </UIView>
  )
}

export default Screen
