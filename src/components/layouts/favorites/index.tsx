import React, { useMemo } from 'react'
import { Button, Div, useTheme } from 'react-native-magnus'
import { useCollapsibleHeader } from 'react-navigation-collapsible'
import { Animated } from 'react-native'
import { EventData } from '@types'
import { FocusAwareStatusBar, EventCard } from '@elements'

interface Props {
	viewEvent: (id: string) => void
	findEvent: () => void
	EventsData: EventData[]
}

export default ({ viewEvent, findEvent, EventsData }: Props) => {
	const renderFooter = () => (
		<Button m='2xl' block>
			Find Event
		</Button>
	)

	const options = {
		navigationOptions: {
			headerStyle: { backgroundColor: 'white' } /* Optional */,
		},
	}

	const {
		theme: { colors },
	} = useTheme()

	const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = useCollapsibleHeader(options)

	return (
		<Div bg='gray100'>
			<FocusAwareStatusBar />
			<Animated.FlatList
				{...{ onScroll }}
				contentContainerStyle={{ paddingTop: containerPaddingTop + 40 }}
				scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
				data={EventsData}
				renderItem={({ item }) => <EventCard {...{ item, viewEvent }} />}
				ListFooterComponent={() => useMemo(renderFooter, [])}
			/>
		</Div>
	)
}
