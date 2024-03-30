import metrics from '@metrics'
import { GlobalStylesKeyTypes } from './index.types'

const globalStyles: Record<GlobalStylesKeyTypes, any> = {
  flatListHoriztontalContentContainerStyle: {
    paddingLeft: metrics.SCREEN_HORIZONTAL_PADDING,
    gap: 10,
  },
}

export default globalStyles
