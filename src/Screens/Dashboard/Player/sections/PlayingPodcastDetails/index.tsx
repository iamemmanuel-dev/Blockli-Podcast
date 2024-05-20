import UIView from '@UILibrary/UIView'
import UIImage from '@UILibrary/UIImage'
import UIText from '@UILibrary/UIText'
import theme from '@theme'

const PlayingPodcastDetails = () => {
  return (
    <UIView flex={1}>
      <UIView height='60%' mb={20}>
        <UIImage source={require('@images/img4.png')} radius={40} />
      </UIView>

      <UIView borderBottom={1} borderColor={theme.grey7} pb={20}>
        <UIText
          family='Urbanist_Bold'
          size={24}
          lineHeight={32}
          color={theme.grey3}
          mb={10}
          center
        >
          685: Steve Rambam | The Real Life of a Private Investigator
        </UIText>

        <UIText
          family='Urbanist_SemiBold'
          size={16}
          lineHeight={22.4}
          color={theme.grey8}
          center
        >
          The Jordan Harbinger Show
        </UIText>
      </UIView>
    </UIView>
  )
}

export default PlayingPodcastDetails
