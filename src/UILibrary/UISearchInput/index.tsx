import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import UIView from '@UILibrary/UIView'
import Wrapper from '@Utilities/Wrapper'
import theme from '@theme'
import globalStyles from '@globalStyles'
import { UISearchInputPropTypes } from './interface'

const UISearchInput: React.FC<UISearchInputPropTypes> = props => {
  return (
    <Wrapper mb={20}>
      <UIView
        height={56}
        bgCol={props.isActive ? theme.primary_light : theme.grey6}
        radius={16}
        flexDir='row'
        align='center'
        colGap={10}
        px={15}
        borderWidth={props.isActive ? 1 : 0}
        borderColor={props.isActive ? theme.primary : 'transparent'}
      >
        <Feather
          name='search'
          size={20}
          color={props.isActive ? theme.primary : theme.grey5}
        />
        <TextInput
          placeholder='Search'
          placeholderTextColor={theme.grey5}
          style={[globalStyles.textInputStyles]}
          cursorColor={theme.grey3}
          {...props}
        />
      </UIView>
    </Wrapper>
  )
}

export default UISearchInput
