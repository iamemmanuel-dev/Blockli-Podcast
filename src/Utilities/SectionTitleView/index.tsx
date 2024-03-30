import UIView from '@UILibrary/UIView'
import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import metrics from '@metrics'
import theme from '@theme'
import { SectionTitleViewProps } from './interface'

const SectionTitleView: React.FC<SectionTitleViewProps> = props => {
  return (
    <UIView
      mb={metrics.SECTION_TITLE_BOTTOM_MARGIN}
      flexDir='row'
      align='center'
      justify='space-between'
      {...props}
    >
      <UIText
        family='Urbanist_Bold'
        size={20}
        lineHeight={19.2}
        color={theme.grey3}
      >
        {props.title}
      </UIText>

      <UIPressable
        hitSlop={metrics.makeHitSlop()}
        onPress={props.onTapOnLinkText}
      >
        <UIText
          family='Urbanist_Bold'
          size={16}
          lineHeight={22.4}
          color={theme.primary}
        >
          {props.linkText}
        </UIText>
      </UIPressable>
    </UIView>
  )
}

export default SectionTitleView
