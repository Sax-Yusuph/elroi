import { FocusAwareStatusBar, EventCard } from '@elements'
import { EventData } from '@types'
import React, { useMemo, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Div } from 'react-native-magnus'
import { ListHeader } from './extra/header'

type ViewEvent = (id: string) => void

interface Props {
	joinEvent: ViewEvent
	viewEvent: ViewEvent
	goToEventsScreen: () => void
	EventsData: EventData[]
}

export default ({ joinEvent, goToEventsScreen, viewEvent, EventsData }: Props) => {
	const renderHeader = () => <ListHeader {...{ goToEventsScreen, joinEvent }} />

	return (
		<Div bg='gray100'>
			<FocusAwareStatusBar />

			<FlatList
				contentContainerStyle={{}}
				ListHeaderComponent={useMemo(renderHeader, [])}
				data={EventsData}
				renderItem={({ item }) => <EventCard {...{ item, viewEvent }} />}
			/>
		</Div>
	)
}
