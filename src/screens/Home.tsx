import React, { useEffect, useState } from 'react'
import ContentView from '@layouts/home'
import { StatusBar } from 'react-native-magnus'
import { HomeScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { Data } from '@models/mockData'
import { useIsFocused } from '@react-navigation/native'
import { OptimizedHeavyScreen } from 'react-navigation-heavy-screen'

const Home: React.FC<HomeScreenProp> = ({ navigation }) => {
	const [EventsData, setEventsData] = useState<EventData[]>([])
	const isFocused = useIsFocused()

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
			{isFocused && <StatusBar backgroundColor='gray100' animated />}
			<ContentView {...{ joinEvent, goToEventsScreen, viewEvent, EventsData }} />
		</>
	)
}

export default Home
