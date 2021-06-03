import React, { memo } from 'react'

import ContentView from '@layouts/onboarding'

import { useRouteState } from '@stores'
import { OnboardingScreenProps } from 'navigation/types'

const Transcript: React.FC<OnboardingScreenProps> = memo(({ navigation }) => {
	const { setCurrentRoute } = useRouteState(state => state)

	const onOnboardingDone = () => {
		navigation.navigate('Auth', { screen: 'SignUp' })
	}

	const joinEvent = () => {
		setCurrentRoute('GuestMode')
		navigation.navigate('Guest', { screen: 'JoinEvent' })
	}

	const signUp = () => {
		// setCurrentRoute('Auth')
		navigation.navigate('Auth', { screen: 'SignUp' })
	}
	return <ContentView {...{ onOnboardingDone, joinEvent, signUp }} />
})

export default Transcript
