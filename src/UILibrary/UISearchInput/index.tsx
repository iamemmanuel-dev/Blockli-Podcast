import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import UIView from '@UILibrary/UIView'
import Wrapper from '@Utilities/Wrapper'
import theme from '@theme'
import globalStyles from '@globalStyles'

const UISearchInput = () => {
  return (
    <Wrapper mb={20}>
      <UIView
        height={56}
        bgCol={theme.grey6}
        radius={16}
        flexDir='row'
        align='center'
        colGap={10}
        px={15}
      >
        <Feather name='search' size={20} color={theme.grey5} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={theme.grey5}
          style={[globalStyles.textInputStyles]}
          cursorColor={theme.grey3}
        />
      </UIView>
    </Wrapper>
  )
}

export default UISearchInput
