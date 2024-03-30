import Screen from '@Utilities/Screen'
import UISearchInput from '@UILibrary/UISearchInput'
import ScreenTitleView from '@reusables/ScreenTitleView'
import PopularAndTrendingAuthorsSection from './sections/PopularAndTrendingAuthors'
import MostListenedPodcastsSection from './sections/MostListenedPodcasts'

const DiscoverScreen = () => {
  return (
    <Screen>
      <ScreenTitleView title='Discover' withMicIcon />
      <UISearchInput />
      <PopularAndTrendingAuthorsSection />
      <MostListenedPodcastsSection />
    </Screen>
  )
}

export default DiscoverScreen
