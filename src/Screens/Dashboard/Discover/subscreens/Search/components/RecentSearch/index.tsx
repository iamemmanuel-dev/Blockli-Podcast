import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import { DeleteIcon } from '@appIcons'
import metrics from '@metrics'
import theme from '@theme'
import { RecentSearchPropTypes } from './interface'

const RecentSearch: React.FC<RecentSearchPropTypes> = props => {
  return (
    <UIPressable
      flexDir='row'
      align='center'
      justify='space-between'
      py={15}
      onPress={props.onSearchSelect}
    >
      <UIText
        family='Urbanist_Medium'
        size={18}
        lineHeight={22.4}
        color={theme.grey2}
        flex={1}
      >
        {props.search}
      </UIText>

      <UIPressable
        hitSlop={metrics.makeHitSlop()}
        onPress={props.onSearchDelete}
      >
        <DeleteIcon />
      </UIPressable>
    </UIPressable>
  )
}

export default RecentSearch
