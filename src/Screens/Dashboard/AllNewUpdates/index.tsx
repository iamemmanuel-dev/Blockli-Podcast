import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import ScreenTitleView from '@reusables/ScreenTitleView'
import Podcast from '@reusables/Podcast'

const NewUpdatesScreen = () => {
  const renderNewUpdates = () => <Podcast />

  return (
    <Screen>
      <ScreenTitleView title='New Updates' />
      <Wrapper>
        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={renderNewUpdates}
        />
      </Wrapper>
    </Screen>
  )
}

export default NewUpdatesScreen
