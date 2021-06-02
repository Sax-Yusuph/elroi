import React, { useMemo } from 'react'
import EventCard from '@elements/eventCard'
import { Button, Div, useTheme } from 'react-native-magnus'
import { useCollapsibleHeader } from 'react-navigation-collapsible'
import { Animated } from 'react-native'
import { EventData } from '@types'
interface Props {
	viewEvent: (id: string) => void
	findEvent: () => void
	EventsData: EventData[]
}

export default ({ viewEvent, findEvent, EventsData }: Props) => {
	const renderFooter = () => <Button mr='xl'>Find Event</Button>

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
