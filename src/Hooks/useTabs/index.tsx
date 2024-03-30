import { useState } from 'react'

const useTabs = (TABS: Array<string>) => {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const onTabSwitch = (tab: string) => setActiveTab(tab)

  return { onTabSwitch, activeTab }
}

export default useTabs
