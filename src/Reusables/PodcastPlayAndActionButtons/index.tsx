import { Ionicons } from '@expo/vector-icons'
import UIPressable from '@UILibrary/UIPressable'
import UIView from '@UILibrary/UIView'
import PlayButton from '@reusables/PlayButton'
import { AddItemIcon, DownloadIcon } from '@appIcons'
import metrics from '@metrics'
import theme from '@theme'

const PodcastPlayAndActionButtons = () => {
  return (
    <UIView flexDir='row' align='center'>
      <UIView flex={1} flexDir='row' align='center' colGap={20}>
        <PlayButton onPlay={() => {}} />
        <AddItemIcon />
        <DownloadIcon />
      </UIView>

      <UIPressable hitSlop={metrics.makeHitSlop()}>
        <Ionicons name='ellipsis-vertical' size={20} color={theme.grey3} />
      </UIPressable>
    </UIView>
  )
}

export default PodcastPlayAndActionButtons
