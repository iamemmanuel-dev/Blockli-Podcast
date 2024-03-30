import { Ionicons } from '@expo/vector-icons'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import UIImage from '@UILibrary/UIImage'
import UIPressable from '@UILibrary/UIPressable'
import theme from '@theme'
import metrics from '@metrics'
import PlayButton from '@reusables/PlayButton'
import { AddItemIcon, DownloadIcon } from '@appIcons'

const NewUpdatesTile = () => {
  const onPlay = () => {}

  return (
    <UIView flexDir='row' colGap={15} mb={metrics.BASE_GAP}>
      <UIView flex={0.5} radius={20} height={100}>
        <UIImage source={require('@images/img3.png')} radius={20} />
      </UIView>

      <UIView flex={1}>
        <UIText
          family='Urbanist_Bold'
          size={18}
          lineHeight={19.2}
          color={theme.grey3}
          mb={10}
        >
          927: Deep Dive | How to Quit Your Job the Right Way
        </UIText>

        <UIText family='Urbanist_Medium' size={12} color={theme.grey4} mb={10}>
          Apple Talk | 52:27 mins
        </UIText>

        <UIView flexDir='row' align='center'>
          <UIView flex={1} flexDir='row' align='center' colGap={20}>
            <PlayButton onPlay={onPlay} />
            <AddItemIcon />
            <DownloadIcon />
          </UIView>

          <UIPressable hitSlop={metrics.makeHitSlop()}>
            <Ionicons name='ellipsis-vertical' size={20} color={theme.grey3} />
          </UIPressable>
        </UIView>
      </UIView>
    </UIView>
  )
}

export default NewUpdatesTile
