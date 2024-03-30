import { Ionicons } from '@expo/vector-icons'
import UIPressable from '@UILibrary/UIPressable'
import UIImage from '@UILibrary/UIImage'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import truncateText from '@helpers/TruncateText'
import theme from '@theme'
import { SubscriptionListPropTypes } from '@data/interface'

const SubscriptionTile: React.FC<SubscriptionListPropTypes> = props => {
  return (
    <UIPressable flexDir='row' align='center' mb={20}>
      <UIView flex={1} flexDir='row' align='center' colGap={15}>
        <UIView width={100} height={100}>
          <UIImage source={props.image} />
        </UIView>

        <UIView>
          <UIText
            family='Urbanist_Bold'
            size={18}
            lineHeight={19.2}
            color={theme.grey3}
            mb={10}
          >
            {truncateText(props.name)}
          </UIText>

          <UIText family='Urbanist_Medium' size={12} color={theme.grey4}>
            {`${props.numberOfPodcasts} Podcasts`}
          </UIText>
        </UIView>
      </UIView>

      <UIPressable>
        <Ionicons name='ellipsis-vertical' size={20} color={theme.grey3} />
      </UIPressable>
    </UIPressable>
  )
}

export default SubscriptionTile
