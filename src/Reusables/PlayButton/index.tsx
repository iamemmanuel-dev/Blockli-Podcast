import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import { PlayIcon } from '@appIcons'
import theme from '@theme'
import { PlayButtonPropTypes } from './interface'

const PlayButton: React.FC<PlayButtonPropTypes> = props => {
  return (
    <UIPressable
      onPress={props.onPlay}
      bgCol={theme.primary}
      py={3}
      px={15}
      alignSelf='flex-start'
      flexDir='row'
      align='center'
      colGap={10}
      radius={50}
    >
      <PlayIcon />
      <UIText
        family='Urbanist_SemiBold'
        size={14}
        lineHeight={22.4}
        color={theme.white}
      >
        Play
      </UIText>
    </UIPressable>
  )
}

export default PlayButton
