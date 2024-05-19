import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import GetPremiumAdSection from './sections/GetPremiumAd'
import HeaderSection from './sections/Header'
import NewUpdatesSection from './sections/NewUpdates'
import SubscriptionsSection from './sections/Subscriptions'

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
            <SubscriptionsSection />
            <NewUpdatesSection />
          </>
        )}
      />
    </Screen>
  )
}

export default HomeScreen
