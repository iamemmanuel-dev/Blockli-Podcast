import { FlatList, ListRenderItem } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import Podcast from '@reusables/Podcast'

const EpisodesSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const renderEpisodes: ListRenderItem<number> = ({ item, index }) => (
    <Podcast isLastItem={index === 2} />
  )

  const onTapOnSeeAll = () =>
    navigation.navigate('EpisodesAndAuthorsScreen', { origin: 'Episodes' })

  return (
    <Section>
      <Wrapper>
        <SectionTitleView
          title='Episodes'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />

        <FlatList data={[1, 2, 3]} renderItem={renderEpisodes} />
      </Wrapper>
    </Section>
  )
}

export default EpisodesSection
