import UIView from '@UILibrary/UIView'
import UISearchInput from '@UILibrary/UISearchInput'
import UITabs from '@UILibrary/UITabs'
import SafeArea from '@Utilities/SafeArea'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import useTabs from '@hooks/useTabs'
import NoSearchResultView from './views/NoSearchResult'

const TABS = ['Podcasts', 'Authors']

const SearchResultScreen = () => {
  const { activeTab, onTabSwitch } = useTabs(TABS)

  return (
    <Screen>
      <SafeArea>
        <UIView mt={20}>
          <UISearchInput />
        </UIView>
      </SafeArea>

      <Wrapper flex={1}>
        <UITabs tabs={TABS} activeTab={activeTab} onTabSwitch={onTabSwitch} />
        <NoSearchResultView />
      </Wrapper>
    </Screen>
  )
}

export default SearchResultScreen
