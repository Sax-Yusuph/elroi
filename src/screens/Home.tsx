import React, { useEffect, useState } from 'react'
import ContentView from '@layouts/home'
import { HomeScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { Data } from '@models/mockData'
import { useEventState, useRouteState } from '@stores'

const Home: React.FC<HomeScreenProp> = ({ navigation }) => {
	const [EventsData, setEventsData] = useState<EventData[]>([])
	const { setCurrentRoute } = useRouteState(state => state)
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
		setCurrentRoute('EventStream')
	}

	const viewEvent = (eventId: string) => {
		navigation.navigate('Events', { screen: 'SingleEvent', params: { eventId } })
	}

	return <ContentView {...{ joinEvent, goToEventsScreen, viewEvent, EventsData }} />
}

export default Home
