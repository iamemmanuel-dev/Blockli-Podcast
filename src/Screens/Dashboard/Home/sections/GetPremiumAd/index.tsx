import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import UIImage from '@UILibrary/UIImage'
import UIPressable from '@UILibrary/UIPressable'
import Section from '@Utilities/Section'
import Wrapper from '@Utilities/Wrapper'
import theme from '@theme'

const GetPremiumAdSection = () => {
  return (
    <Section>
      <Wrapper>
        <UIView
          radius={32}
          bgCol={theme.primary}
          overflow='hidden'
          px={20}
          pb={20}
        >
          <UIView pt={25} width='65%'>
            <UIView mb={20}>
              <UIText
                family='Urbanist_Bold'
                size={24}
                lineHeight={29.2}
                color={theme.white}
                mb={13}
              >
                Enjoy All Benefits!
              </UIText>

              <UIText family='Urbanist_Regular' size={12} color={theme.white}>
                Enjoy listening podcast with better audio quality, without
                restrictions, and without ads
              </UIText>
            </UIView>

            <UIPressable
              bgCol={theme.white}
              alignSelf='flex-start'
              py={5}
              px={15}
              radius={50}
            >
              <UIText
                family='Urbanist_SemiBold'
                size={14}
                lineHeight={22.4}
                color={theme.primary}
              >
                Get Premium
              </UIText>
            </UIPressable>
          </UIView>

          <UIView
            position='absolute'
            right={10}
            zIndex={1000}
            bottom={0}
            height='90%'
            width='50%'
          >
            <UIImage
              source={require('@images/cardImg.webp')}
              contentFit='contain'
            />
          </UIView>
        </UIView>
      </Wrapper>
    </Section>
  )
}

export default GetPremiumAdSection
