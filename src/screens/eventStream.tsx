import React, { memo, useEffect, useState } from 'react'

import { Streamer as ContentView } from '@layouts'
import { StreamingData as MockData } from '@models'

import { useRouteState } from '@stores'
import { StreamingScreenProps } from 'navigation/types'
import { IStreamEvent } from '@types'
import { VideoItem } from '@models'

const MockVideo: VideoItem = {
	id: '2',
	// imageSource: require('./extra/test.jpeg'),
	user: 'derek.russel',
	// avatar: require('./assets/avatars/derek.russel.png'),
	video: require('@assets/lights.mp4'),
}

const EventStream: React.FC<StreamingScreenProps> = memo(({ navigation }) => {
	const [data, setData] = useState<IStreamEvent[] | null>(null)
	const [video, setVideo] = useState<VideoItem | null>(null)

	const { setCurrentRoute, setPreviousRoute, currentRoute } = useRouteState(state => state)

	useEffect(() => {
		setData(MockData)
		setVideo(MockVideo)
	}, [])

	const leaveEvent = () => {
		setPreviousRoute('EventStream')

		if (currentRoute === 'GuestMode') {
			setCurrentRoute('GuestMode')
		} else {
			setCurrentRoute('App')
		}
		// if is guest mode..navigate to geustmide view,, else navigate to home
	}

	const openFullScreenMode = () => {
		if (video) {
			navigation.navigate('FullScreenVideoMode', { video })
		}
	}

	const onProgressChange = () => {
		// setCurrentRoute('Auth')
	}

	const viewTranscript = () => {
		// setCurrentRoute('Auth')
		navigation.navigate('Transcript', { eventId: 'random string' })
	}
	return (
		<ContentView
			{...{ data, leaveEvent, openFullScreenMode, video, onProgressChange, viewTranscript }}
		/>
	)
})

export default EventStream
