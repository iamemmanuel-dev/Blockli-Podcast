import { Dimensions } from 'react-native'

const metrics = {
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HORIZONTAL_PADDING: 15,
  SCREEN_BOTTOM_PADDING: 20,

  BASE_GAP: 20,
  SECTION_TITLE_BOTTOM_MARGIN: 15,

  makeHitSlop: (slop = 20) => ({
    top: slop,
    right: slop,
    bottom: slop,
    left: slop,
  }),
}

export default metrics