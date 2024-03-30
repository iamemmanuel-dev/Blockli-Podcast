import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import theme from '@theme'
import { UITabsPropTypes } from './interface'

const UITabs: React.FC<UITabsPropTypes> = props => {
  return (
    <UIView flexDir='row' align='center'>
      {props.tabs.map(tab => (
        <UIPressable
          onPress={() => props.onTabSwitch(tab)}
          key={tab}
          flex={1}
          center
          borderBottom={tab === props.activeTab ? 4 : 2}
          borderColor={tab === props.activeTab ? theme.primary : theme.grey7}
          py={10}
          pb={15}
        >
          <UIText
            family='Urbanist_SemiBold'
            size={18}
            lineHeight={22.4}
            color={tab === props.activeTab ? theme.primary : theme.grey1}
          >
            {tab}
          </UIText>
        </UIPressable>
      ))}
    </UIView>
  )
}

export default UITabs
