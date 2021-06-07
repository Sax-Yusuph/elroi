import React, { useEffect, useState } from 'react'
import { Home as ContentView } from '@layouts'
import { HomeScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { EventsData as Data } from '@models'
import { useEventState, useRouteState } from '@stores'

const Home: React.FC<HomeScreenProp> = ({ navigation }) => {
	const [EventsData, setEventsData] = useState<EventData[]>([])
	const { setCurrentRoute, setPreviousRoute } = useRouteState(state => state)
	const { setEventId } = useEventState(state => state)

	useEffect(() => {
		setTimeout(() => {
			setEventsData(Data)
		}, 300)
	}, [])

	const goToEventsScreen = () => {
		console.log('pressed')
		navigation.navigate('Events', { screen: 'EventScreen' })
	}

	const joinEvent = (eventId: string) => {
		setEventId(eventId)
		setCurrentRoute('App')
		setCurrentRoute('EventStream')
	}

	const viewEvent = (eventId: string) => {
		navigation.navigate('Events', { screen: 'SingleEvent', params: { eventId } })
	}

	return <ContentView {...{ joinEvent, goToEventsScreen, viewEvent, EventsData }} />
}

export default Home
