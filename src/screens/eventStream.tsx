import React, { memo, useEffect, useState } from 'react'

import ContentView from '@layouts/streamer'
import MockData from '@layouts/streamer/extra/data'

import { useRouteState } from '@stores'
import { OnboardingScreenProps } from 'navigation/types'
import { IStreamEvent } from '@types'
import { VideoItem } from '@models'

const MockVideo: VideoItem = {
	id: '2',
	// imageSource: require('./extra/test.jpeg'),
	user: 'derek.russel',
	// avatar: require('./assets/avatars/derek.russel.png'),
	video: require('@assets/lights.mp4'),
}

const EventStream: React.FC<OnboardingScreenProps> = memo(({ navigation }) => {
	const { setCurrentRoute } = useRouteState(state => state)
	const [data, setData] = useState<IStreamEvent[] | null>(null)
	const [video, setVideo] = useState<VideoItem | null>(null)

	useEffect(() => {
		setData(MockData)
		setVideo(MockVideo)
	}, [])

	const leaveEvent = () => {
		// if is guest mode..navigate to geustmide view,, else navigate to home
		// navigation.navigate('Auth', { screen: 'SignUp' })
	}

	const openFullScreenMode = () => {
		setCurrentRoute('GuestMode')
		navigation.navigate('Guest', { screen: 'JoinEvent' })
	}

	const onProgressChange = () => {
		// setCurrentRoute('Auth')
	}

	const viewTranscript = () => {
		// setCurrentRoute('Auth')
		// navigation.navigate('Auth', { screen: 'SignUp' })
	}
	return (
		<ContentView
			{...{ data, leaveEvent, openFullScreenMode, video, onProgressChange, viewTranscript }}
		/>
	)
})

export default EventStream
