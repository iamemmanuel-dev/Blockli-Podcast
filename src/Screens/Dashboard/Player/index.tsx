import Screen from '@Utilities/Screen'
import SafeArea from '@Utilities/SafeArea'
import Wrapper from '@Utilities/Wrapper'
import PlayerHeaderTitleView from './sections/PlayerHeaderTitleView'
import PlayingPodcastDetails from './sections/PlayingPodcastDetails'
import PlayerControls from './components/PlayerControls'

const PlayerScreen = () => {
  return (
    <Screen>
      <SafeArea flex={1}>
        <Wrapper flex={1}>
          <PlayerHeaderTitleView />
          <PlayingPodcastDetails />
          <PlayerControls />
        </Wrapper>
      </SafeArea>
    </Screen>
  )
}

export default PlayerScreen
