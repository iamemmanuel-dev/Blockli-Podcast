import UIImage from '@UILibrary/UIImage'
import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import SafeArea from '@Utilities/SafeArea'
import Section from '@Utilities/Section'
import Wrapper from '@Utilities/Wrapper'
import { BellIcon } from '@appIcons'
import metrics from '@metrics'
import theme from '@theme'

const HeaderSection = () => {
  return (
    <Section>
      <SafeArea />
      <Wrapper flexDir='row' align='center'>
        <UIView flex={1} flexDir='row' align='center' colGap={10}>
          <UIView width={48} height={48} radius={100}>
            <UIImage source={require('@images/user.webp')} radius={100} />
          </UIView>

          <UIView>
            <UIText
              family='Urbanist_Regular'
              size={16}
              lineHeight={22.4}
              color={theme.grey2}
              mb={5}
            >
              Good Morning 👋
            </UIText>
            <UIText
              family='Urbanist_Bold'
              size={20}
              lineHeight={19.2}
              color={theme.grey3}
            >
              Andrew Ainsley
            </UIText>
          </UIView>
        </UIView>

        <UIPressable hitSlop={metrics.makeHitSlop()}>
          <BellIcon />
        </UIPressable>
      </Wrapper>
    </Section>
  )
}

export default HeaderSection
