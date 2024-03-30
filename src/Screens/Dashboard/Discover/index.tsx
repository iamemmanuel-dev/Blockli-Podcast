import Screen from '@Utilities/Screen'
import UISearchInput from '@UILibrary/UISearchInput'
import ScreenTitleView from '@reusables/ScreenTitleView'
import PopularAndTrendingAuthorsSection from './sections/PopularAndTrendingAuthors'

const DiscoverScreen = () => {
  return (
    <Screen>
      <ScreenTitleView title='Discover' withMicIcon />
      <UISearchInput />
      <PopularAndTrendingAuthorsSection />
    </Screen>
  )
}

export default DiscoverScreen
