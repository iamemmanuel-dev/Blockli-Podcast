import Screen from '@Utilities/Screen'
import GetPremiumAdSection from './sections/GetPremiumAd'
import HeaderSection from './sections/Header'
import SubscriptionsSection from './sections/Subscriptions'

const HomeScreen = () => {
  return (
    <Screen>
      <HeaderSection />
      <GetPremiumAdSection />
      <SubscriptionsSection />
    </Screen>
  )
}

export default HomeScreen
