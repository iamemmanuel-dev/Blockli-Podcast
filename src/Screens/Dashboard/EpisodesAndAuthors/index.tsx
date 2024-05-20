import { useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { EpisodesAndAuthorsScreenRouteProp } from '@navigation/index.types'
import UISearchInput from '@UILibrary/UISearchInput'
import UITabs from '@UILibrary/UITabs'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import SafeArea from '@Utilities/SafeArea'
import Podcast from '@reusables/Podcast'
import theme from '@theme'

const TABS = ['Episodes', 'Authors']

const EpisodesAndAuthorsScreen = () => {
  const { origin } = useRoute<EpisodesAndAuthorsScreenRouteProp>().params
  const [activeTab, setActiveTab] = useState<any>(origin)
  const onTabSwitch = (tab: string) => setActiveTab(tab)

  const renderEpisodes: ListRenderItem<number> = ({ item, index }) => (
    <Podcast isLastItem={index === 2} />
  )

  return (
    <Screen>
      <SafeArea>
        <UISearchInput
          placeholder='Podcast'
          placeholderTextColor={theme.grey3}
        />
      </SafeArea>
      <Wrapper flex={1}>
        <UITabs tabs={TABS} activeTab={activeTab} onTabSwitch={onTabSwitch} />

        <FlatList
          data={[1, 2, 3]}
          renderItem={renderEpisodes}
          contentContainerStyle={{ paddingVertical: 30 }}
        />
      </Wrapper>
    </Screen>
  )
}

export default EpisodesAndAuthorsScreen
