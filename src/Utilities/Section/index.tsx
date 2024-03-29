import UIView from '@UILibrary/UIView'
import metrics from '@metrics'
import { SectionPropTypes } from './interface'

const Section: React.FC<SectionPropTypes> = props => {
  return (
    <UIView mb={metrics.BASE_GAP} {...props}>
      {props.children}
    </UIView>
  )
}

export default Section
