import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProp } from '@navigation/index.types'
import UIPressable from '@UILibrary/UIPressable'
import UIText from '@UILibrary/UIText'
import Section from '@Utilities/Section'
import SectionTitleView from '@Utilities/SectionTitleView'
import Wrapper from '@Utilities/Wrapper'
import NewUpdatesTile from '@reusables/NewUpdatesTile'
import metrics from '@metrics'
import theme from '@theme'

const NewUpdatesSection = () => {
  const navigation = useNavigation<useNavigationProp>()
  const renderNewUpdates = () => <NewUpdatesTile />

  const onTapOnSeeAll = () => navigation.navigate('AllNewUpdatesScreen')

  return (
    <Section>
      <Wrapper>
        <SectionTitleView flexDir='row' align='center' justify='space-between'>
          <UIText
            family='Urbanist_Bold'
            size={20}
            lineHeight={19.2}
            color={theme.grey3}
          >
            New Updates
          </UIText>

          <UIPressable hitSlop={metrics.makeHitSlop()} onPress={onTapOnSeeAll}>
            <UIText
              family='Urbanist_Bold'
              size={16}
              lineHeight={22.4}
              color={theme.primary}
            >
              See All
            </UIText>
          </UIPressable>
        </SectionTitleView>

        <FlatList data={[1, 2, 3]} renderItem={renderNewUpdates} />
      </Wrapper>
    </Section>
  )
}

export default NewUpdatesSection
