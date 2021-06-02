import React, { useEffect, useState } from 'react'
import ContentView from '@layouts/events'
import { StatusBar } from 'react-native-magnus'
import { EventScreenProp, HomeScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { Data } from '@models/mockData'

const SingleEvent: React.FC<EventScreenProp> = ({ navigation }) => {
	const [EventsData, setEventsData] = useState<EventData[]>([])

	useEffect(() => {
		setTimeout(() => {
			setEventsData(Data)
		}, 300)
	}, [])

	const goToEventsScreen = () => {
		// navigation.navigate('Events', { screen: 'Events' })
	}

	const joinEvent = (eventId: string) => {
		// navigation.navigate('StreamService', {
		// 	screen: 'StreamingScreen',
		// 	params: { eventId },
		// })
	}

	const viewEvent = (id: string) => {
		// navigation.navigate('')
	}

	return (
		<>
			<StatusBar hidden={false} />
			<ContentView {...{ joinEvent, goToEventsScreen, viewEvent, EventsData }} />
		</>
	)
}

export default SingleEvent
