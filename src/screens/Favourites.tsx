import React, { useEffect, useState } from 'react'
import ContentView from '@layouts/favorites'
import { FavoriteScreenProp } from 'navigation/types'
import { Data } from '@models/mockData'
import { EventData } from '@types'
import { OptimizedHeavyScreen } from 'react-navigation-heavy-screen'

const FavoritesScreen = ({ navigation }: FavoriteScreenProp) => {
	const viewEvent = (id: string) => {}
	const findEvent = () => {}
	const [EventsData, setEventsData] = useState<EventData[]>([])

	useEffect(() => {
		setEventsData(Data)
	}, [])

	return (
		<OptimizedHeavyScreen>
			<ContentView {...{ viewEvent, findEvent, EventsData }} />
		</OptimizedHeavyScreen>
	)
}

export default FavoritesScreen
