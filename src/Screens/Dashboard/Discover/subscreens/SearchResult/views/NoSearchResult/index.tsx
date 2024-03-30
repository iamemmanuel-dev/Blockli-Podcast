import UIImage from '@UILibrary/UIImage'
import UIText from '@UILibrary/UIText'
import UIView from '@UILibrary/UIView'
import metrics from '@metrics'
import theme from '@theme'

const NoSearchResultView = () => {
  return (
    <UIView flex={1} center>
      <UIView
        width={metrics.SCREEN_WIDTH * 0.8}
        height={metrics.SCREEN_HEIGHT * 0.3}
        mb={20}
      >
        <UIImage
          source={require('@images/notFound.webp')}
          contentFit='contain'
        />
      </UIView>

      <UIText
        family='Urbanist_Bold'
        size={24}
        lineHeight={29.2}
        color={theme.grey3}
        mb={15}
      >
        Not Found
      </UIText>

      <UIText
        family='Urbanist_Regular'
        size={18}
        lineHeight={19.2}
        color={theme.grey3}
        center
      >
        Sorry, the keyword you entered cannot be found, please check again or
        search with another keyword.
      </UIText>
    </UIView>
  )
}

export default NoSearchResultView
