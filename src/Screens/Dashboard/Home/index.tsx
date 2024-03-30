import Screen from '@Utilities/Screen'
import GetPremiumAdSection from './sections/GetPremiumAd'
import HeaderSection from './sections/Header'
import NewUpdatesSection from './sections/NewUpdates'
import SubscriptionsSection from './sections/Subscriptions'

const HomeScreen = () => {
  return (
    <Screen>
      <HeaderSection />
      <GetPremiumAdSection />
      <SubscriptionsSection />
      <NewUpdatesSection />
    </Screen>
  )
}

export default HomeScreen
