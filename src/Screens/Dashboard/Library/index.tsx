import { FlatList, ListRenderItem } from 'react-native'
import ScreenTitleView from '@reusables/ScreenTitleView'
import Screen from '@Utilities/Screen'
import Wrapper from '@Utilities/Wrapper'
import UITabs from '@UILibrary/UITabs'
import UIView from '@UILibrary/UIView'
import { SUBSCRIPTIONS_LIST } from '@data/index'
import { SubscriptionListPropTypes } from '@data/interface'
import useTabs from '@hooks/useTabs'
import SubscriptionTile from '../AllSubscriptions/components/SubscriptionTile'

const TABS = ['Subscriptions', 'Queue', 'Downloads']

const LibraryScreen = () => {
  const { activeTab, onTabSwitch } = useTabs(TABS)
  const renderSubscriptions: ListRenderItem<SubscriptionListPropTypes> = ({
    item,
  }) => <SubscriptionTile {...item} />

  return (
    <Screen>
      <ScreenTitleView title='Library' withMicIcon />
      <Wrapper flex={1}>
        <UITabs tabs={TABS} activeTab={activeTab} onTabSwitch={onTabSwitch} />
        <UIView my={30}>
          <FlatList
            data={SUBSCRIPTIONS_LIST}
            renderItem={renderSubscriptions}
          />
        </UIView>
      </Wrapper>
    </Screen>
  )
}

export default LibraryScreen
