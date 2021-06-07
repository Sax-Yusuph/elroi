import React, { useEffect, useState } from 'react'
import { FavoriteScreenProp } from 'navigation/types'
import { Favourites as ContentView } from '@layouts'
import { EventsData as Data } from '@models'
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
