import { FlatList, ImageSourcePropType, ListRenderItem } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import UIPressable from '@UILibrary/UIPressable'
import UIImage from '@UILibrary/UIImage'
import { SUBSCRIPTIONS } from '@data/index'
import globalStyles from '@globalStyles'

const PodcastSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const onTapOnSeeAll = () => navigation.navigate('AllPodcastsScreen')

  const renderPodcasts: ListRenderItem<{
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
        <SectionTitleView
          title='Podcasts'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />
      </Wrapper>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SUBSCRIPTIONS}
        renderItem={renderPodcasts}
        contentContainerStyle={
          globalStyles.flatListHoriztontalContentContainerStyle
        }
      />
    </Section>
  )
}

export default PodcastSection
