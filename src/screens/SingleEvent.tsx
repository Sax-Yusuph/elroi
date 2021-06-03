import React, { useEffect, useState } from 'react'
import ContentView from '@layouts/singleEvent.tsx'
import { StatusBar } from 'react-native-magnus'
import { SingleEventScreenProp } from 'navigation/types'
import { EventData } from '@types'
import { Data } from '@models'

const SingleEvent: React.FC<SingleEventScreenProp> = ({ route, navigation }) => {
	const [event, setEvent] = useState<EventData | null>(null)

	useEffect(() => {
		const { eventId } = route.params

		const _data = Data.find(event => event.id === eventId)
		if (_data) {
			setEvent(_data)
		}
	}, [])

	const registerEvent = () => {
		// navigation.navigate('Events', { screen: 'Events' })
	}

	return (
		<>
			<StatusBar hidden={false} />
			{event?.title && <ContentView {...{ registerEvent, event }} />}
		</>
	)
}

export default SingleEvent
