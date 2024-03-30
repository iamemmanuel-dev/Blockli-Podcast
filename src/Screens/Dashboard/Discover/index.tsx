import { NavigationProp } from '@navigation/index.types'
import Screen from '@Utilities/Screen'
import UISearchInput from '@UILibrary/UISearchInput'
import UIPressable from '@UILibrary/UIPressable'
import ScreenTitleView from '@reusables/ScreenTitleView'
import PopularAndTrendingAuthorsSection from './sections/PopularAndTrendingAuthors'
import MostListenedPodcastsSection from './sections/MostListenedPodcasts'

const DiscoverScreen = ({ navigation }: NavigationProp) => {
  const onTapOnSearchInput = () => navigation.navigate('SearchScreen')

  return (
    <Screen>
      <ScreenTitleView title='Discover' withMicIcon />
      <UIPressable onPress={onTapOnSearchInput}>
        <UISearchInput editable={false} pointerEvents='none' />
      </UIPressable>
      <PopularAndTrendingAuthorsSection />
      <MostListenedPodcastsSection />
    </Screen>
  )
}

export default DiscoverScreen
