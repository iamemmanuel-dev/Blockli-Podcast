import { FlatList } from 'react-native'
import { NavigationProp } from '@navigation/index.types'
import Screen from '@Utilities/Screen'
import SafeArea from '@Utilities/SafeArea'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import UISearchInput from '@UILibrary/UISearchInput'
import UIView from '@UILibrary/UIView'
import theme from '@theme'
import RecentSearch from './components/RecentSearch'

const SearchScreen = ({ navigation }: NavigationProp) => {
  const onTapOnClearAll = () => {}

  const onSearchSelect = () => navigation.navigate('SearchResultScreen')

  const renderRecentSearches = () => (
    <RecentSearch
      search='How Our Brains Construct Reality'
      onSearchSelect={onSearchSelect}
      onSearchDelete={() => {}}
    />
  )

  return (
    <Screen>
      <SafeArea>
        <UIView mt={20}>
          <UISearchInput isActive />
        </UIView>
      </SafeArea>

      <Wrapper>
        <SectionTitleView
          title='Recent Searches'
          linkText='Clear All'
          onTapOnLinkText={onTapOnClearAll}
          borderBottom={1}
          borderColor={theme.grey7}
          pt={10}
          pb={15}
        />

        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={renderRecentSearches}
        />
      </Wrapper>
    </Screen>
  )
}

export default SearchScreen
