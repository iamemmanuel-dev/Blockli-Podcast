import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import SafeArea from '@Utilities/SafeArea'
import ScreenTitleView from '@reusables/ScreenTitleView'
import Podcast from '@reusables/Podcast'

const NewUpdatesScreen = () => {
  const renderNewUpdates = () => <Podcast />

  return (
    <Screen>
      <ScreenTitleView title='New Updates' />
      <Wrapper flex={1}>
        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={renderNewUpdates}
        />
      </Wrapper>

      <SafeArea />
    </Screen>
  )
}

export default NewUpdatesScreen
