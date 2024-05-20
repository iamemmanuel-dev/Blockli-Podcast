import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import truncateText from '@helpers/TruncateText'
import { BackIcon, CircleEllipsisIcon } from '@appIcons'
import metrics from '@metrics'

const PlayerHeaderTitleView = () => {
  const navigation = useNavigation<useNavigationProp>()
  const onBackPress = () => navigation.goBack()

  return (
    <UIView flexDir='row' align='center' mb={30}>
      <UIView flex={1} flexDir='row' align='center' colGap={15}>
        <UIPressable hitSlop={metrics.makeHitSlop()} onPress={onBackPress}>
          <BackIcon />
        </UIPressable>

        <UIText family='Urbanist_Bold' size={24} lineHeight={29.2}>
          {truncateText('The Jordan Harbinger Sh...', 15)}
        </UIText>
      </UIView>

      <UIPressable>
        <CircleEllipsisIcon />
      </UIPressable>
    </UIView>
  )
}

export default PlayerHeaderTitleView
