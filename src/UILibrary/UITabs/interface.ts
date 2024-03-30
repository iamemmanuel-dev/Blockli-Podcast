export interface UITabsPropTypes {
  tabs: Array<string>
  activeTab: string
  onTabSwitch: (tab: string) => void
}
