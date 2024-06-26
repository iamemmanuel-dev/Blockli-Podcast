import { ListRenderItem } from 'react-native'
import { FlatList } from 'react-native'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import SafeArea from '@Utilities/SafeArea'
import ScreenTitleView from '@reusables/ScreenTitleView'
import { SUBSCRIPTIONS_LIST } from '@data/index'
import { SubscriptionListPropTypes } from '@data/interface'
import SubscriptionTile from './components/SubscriptionTile'

const AllSubscriptionsScreen = () => {
  const renderSubscriptions: ListRenderItem<SubscriptionListPropTypes> = ({
    item,
  }) => <SubscriptionTile {...item} />

  return (
    <Screen>
      <ScreenTitleView title='Subscriptions' withChainIcon />
      <Wrapper flex={1}>
        <FlatList data={SUBSCRIPTIONS_LIST} renderItem={renderSubscriptions} />
      </Wrapper>

      <SafeArea />
    </Screen>
  )
}

export default AllSubscriptionsScreen
