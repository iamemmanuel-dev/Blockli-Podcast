import { ListRenderItem } from 'react-native'
import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import SafeArea from '@Utilities/SafeArea'
import ScreenTitleView from '@reusables/ScreenTitleView'
import { PODCAST_LIST } from '@data/index'
import { SubscriptionListPropTypes } from '@data/interface'
import Podcast from './components/Podcast'

const AllPodcastsScreen = () => {
  const renderPodcasts: ListRenderItem<SubscriptionListPropTypes> = ({
    item,
  }) => <Podcast {...item} />

  return (
    <Screen>
      <ScreenTitleView title='Podcasts' withChainIcon />
      <Wrapper flex={1}>
        <FlatList data={PODCAST_LIST} renderItem={renderPodcasts} />
      </Wrapper>

      <SafeArea />
    </Screen>
  )
}

export default AllPodcastsScreen
