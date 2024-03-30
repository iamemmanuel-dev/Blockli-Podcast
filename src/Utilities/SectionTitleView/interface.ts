import { UIViewPropTypes } from '@UILibrary/UIView/interface'

export interface SectionTitleViewProps extends UIViewPropTypes {
  title: string
  linkText: string
  onTapOnLinkText: () => void
}
