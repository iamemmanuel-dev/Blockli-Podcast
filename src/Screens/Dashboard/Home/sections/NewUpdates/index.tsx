import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import Podcast from '@reusables/Podcast'

const NewUpdatesSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const renderNewUpdates = () => <Podcast />

  const onTapOnSeeAll = () => navigation.navigate('AllNewUpdatesScreen')

  return (
    <Section>
      <Wrapper>
        <SectionTitleView
          title='New Updates'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />

        <FlatList data={[1, 2, 3]} renderItem={renderNewUpdates} />
      </Wrapper>
    </Section>
  )
}

export default NewUpdatesSection
