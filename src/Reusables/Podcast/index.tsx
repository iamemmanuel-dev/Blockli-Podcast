import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import UIImage from '@UILibrary/UIImage'
import theme from '@theme'
import metrics from '@metrics'
import PodcastPlayAndActionButtons from '../PodcastPlayAndActionButtons'
import { PodcastPropTypes } from './interface'

const Podcast: React.FC<PodcastPropTypes> = props => {
  return (
    <UIView
      flexDir='row'
      colGap={15}
      mb={props.isLastItem ? 0 : metrics.BASE_GAP}
    >
      <UIView flex={0.5} radius={20} height={116}>
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
        <PodcastPlayAndActionButtons />
      </UIView>
    </UIView>
  )
}

export default Podcast
