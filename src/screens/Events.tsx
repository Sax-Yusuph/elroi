import React, { useEffect, useState } from 'react'
import { Events as ContentView } from '@layouts'
import { StatusBar } from 'react-native-magnus'
import { EventScreenProp, HomeScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { EventsData as Data } from '@models'

const EventScreen: React.FC<EventScreenProp> = ({ navigation }) => {
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

	const viewEvent = (eventId: string) => {
		//@ts-ignore
		navigation.navigate('SingleEvent', { eventId })
	}

	return (
		<>
			<StatusBar hidden={false} />
			<ContentView {...{ joinEvent, goToEventsScreen, viewEvent, EventsData }} />
		</>
	)
}

export default EventScreen
