import React, { memo, useEffect, useState } from 'react'
import { Transcript as ContentView } from '@layouts'
import { useRouteState } from '@stores'
import { OnboardingScreenProps } from 'navigation/types'
import { TranscriptText } from '@models'
import { ITranscript } from '@types'

const Transcript: React.FC<OnboardingScreenProps> = memo(({ navigation }) => {
	const { setCurrentRoute } = useRouteState(state => state)

	const [transcriptData, setTranscriptData] = useState<ITranscript | null>(null)

	useEffect(() => {
		setTranscriptData(TranscriptText)
	}, [])

	const goBack = () => {
		navigation.goBack()
	}

	const signUp = () => {
		// setCurrentRoute('Auth')
		navigation.navigate('Auth', { screen: 'SignUp' })
	}
	return <ContentView {...{ goBack, transcriptData }} />
})

export default Transcript
