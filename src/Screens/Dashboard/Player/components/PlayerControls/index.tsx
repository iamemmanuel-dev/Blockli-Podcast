import {
  BackwardRefreshIcon,
  FowardIcon,
  FowardRefreshIcon,
  RewindIcon,
} from '@appIcons'
import { Ionicons } from '@expo/vector-icons'
import UIPressable from '@UILibrary/UIPressable'
import UIView from '@UILibrary/UIView'
import metrics from '@metrics'
import theme from '@theme'

const PlayerControls = () => {
  return (
    <UIView>
      <UIView flexDir='row' align='center' alignSelf='center'>
        <UIView flexDir='row' align='center' colGap={30}>
          <UIPressable hitSlop={metrics.makeHitSlop(5)}>
            <RewindIcon />
          </UIPressable>

          <UIPressable hitSlop={metrics.makeHitSlop(5)}>
            <BackwardRefreshIcon />
          </UIPressable>
        </UIView>

        <UIPressable
          width={60}
          height={60}
          bgCol={theme.primary}
          radius={100}
          mx={30}
          center
        >
          <Ionicons name='play' size={28} color={theme.white} />
        </UIPressable>

        <UIView flexDir='row' align='center' colGap={30}>
          <UIPressable hitSlop={metrics.makeHitSlop(5)}>
            <FowardRefreshIcon />
          </UIPressable>

          <UIPressable hitSlop={metrics.makeHitSlop(5)}>
            <FowardIcon />
          </UIPressable>
        </UIView>
      </UIView>
    </UIView>
  )
}

export default PlayerControls
