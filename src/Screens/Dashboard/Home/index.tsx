import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import GetPremiumAdSection from './sections/GetPremiumAd'
import HeaderSection from './sections/Header'
import EpisodesSection from './sections/Episodes'
import PodcastSection from './sections/Podcasts'
import AuthorsSection from './sections/Authors'

const HomeScreen = () => {
  return (
    <Screen>
      <FlatList
        data={[1]}
        ListHeaderComponent={
          <>
            <HeaderSection />
            <GetPremiumAdSection />
          </>
        }
        renderItem={() => (
          <>
            <PodcastSection />
            <EpisodesSection />
            <AuthorsSection />
          </>
        )}
      />
    </Screen>
  )
}

export default HomeScreen
