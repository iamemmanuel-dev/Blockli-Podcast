import { FlatList, ImageSourcePropType, ListRenderItem } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import UIText from '@UILibrary/UIText'
import UIPressable from '@UILibrary/UIPressable'
import UIImage from '@UILibrary/UIImage'
import theme from '@theme'
import metrics from '@metrics'
import { SUBSCRIPTIONS } from '@data/index'
import globalStyles from '@globalStyles'

const SubscriptionsSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const onTapOnSeeAll = () => navigation.navigate('AllSubscriptionsScreen')

  const renderSubscriptions: ListRenderItem<{
    id: number
    image: ImageSourcePropType
  }> = ({ item }) => (
    <UIPressable key={item.id} width={90} height={90} radius={20}>
      <UIImage source={item.image} radius={20} />
    </UIPressable>
  )

  return (
    <Section>
      <Wrapper>
        <SectionTitleView flexDir='row' align='center' justify='space-between'>
          <UIText
            family='Urbanist_Bold'
            size={20}
            lineHeight={19.2}
            color={theme.grey3}
          >
            Subscriptions
          </UIText>

          <UIPressable hitSlop={metrics.makeHitSlop()} onPress={onTapOnSeeAll}>
            <UIText
              family='Urbanist_Bold'
              size={16}
              lineHeight={22.4}
              color={theme.primary}
            >
              See All
            </UIText>
          </UIPressable>
        </SectionTitleView>
      </Wrapper>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SUBSCRIPTIONS}
        renderItem={renderSubscriptions}
        contentContainerStyle={
          globalStyles.flatListHoriztontalContentContainerStyle
        }
      />
    </Section>
  )
}

export default SubscriptionsSection
