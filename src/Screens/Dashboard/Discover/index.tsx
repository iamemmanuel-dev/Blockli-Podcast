import Screen from '@Utilities/Screen'
import UISearchInput from '@UILibrary/UISearchInput'
import ScreenTitleView from '@reusables/ScreenTitleView'

const DiscoverScreen = () => {
  return (
    <Screen>
      <ScreenTitleView title='Discover' withMicIcon />
      <UISearchInput />
    </Screen>
  )
}

export default DiscoverScreen
