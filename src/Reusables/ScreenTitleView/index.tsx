import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import SafeArea from '@Utilities/SafeArea'
import Wrapper from '@Utilities/Wrapper'
import { BackIcon, ChainIcon, CircleEllipsisIcon, MicIcon } from '@appIcons'
import metrics from '@metrics'
import theme from '@theme'
import { ScreenTitleViewPropTypes } from './interface'

const ScreenTitleView: React.FC<ScreenTitleViewPropTypes> = props => {
  const navigation = useNavigation<useNavigationProp>()
  const onBackPress = () => navigation.goBack()

  return (
    <SafeArea>
      <Wrapper flexDir='row' align='center' mt={20} mb={30}>
        <UIView flex={1} flexDir='row' align='center' colGap={15}>
          {props.withMicIcon ? (
            <MicIcon />
          ) : (
            <UIPressable hitSlop={metrics.makeHitSlop()} onPress={onBackPress}>
              <BackIcon />
            </UIPressable>
          )}

          <UIText
            family='Urbanist_Bold'
            size={24}
            lineHeight={29.2}
            color={theme.grey3}
          >
            {props.title}
          </UIText>
        </UIView>

        <UIView flexDir='row' align='center' colGap={20}>
          {props.withChainIcon && (
            <UIPressable>
              <ChainIcon />
            </UIPressable>
          )}

          <UIPressable>
            <CircleEllipsisIcon />
          </UIPressable>
        </UIView>
      </Wrapper>
    </SafeArea>
  )
}

export default ScreenTitleView
