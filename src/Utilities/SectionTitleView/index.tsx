import UIView from '@UILibrary/UIView'
import metrics from 'src/Metrics'
import { SectionTitleViewProps } from './interface'

const SectionTitleView: React.FC<SectionTitleViewProps> = props => {
  return (
    <UIView mb={metrics.SECTION_TITLE_BOTTOM_MARGIN} {...props}>
      {props.children}
    </UIView>
  )
}

export default SectionTitleView
