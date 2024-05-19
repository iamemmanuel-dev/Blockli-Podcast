import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'

const MostListenedPodcastsSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const renderNewUpdates = () => <></>

  const onTapOnSeeAll = () => {}

  return (
    <Section>
      <Wrapper>
        <SectionTitleView
          title='Most Listened Podcasts'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />

        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={renderNewUpdates}
        />
      </Wrapper>
    </Section>
  )
}

export default MostListenedPodcastsSection
