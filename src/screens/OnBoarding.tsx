import React, { memo } from 'react'

import { Onboarding as ContentView } from '@layouts'
import { useRouteState } from '@stores'
import { OnboardingScreenProps } from 'navigation/types'

const OnBoarding: React.FC<OnboardingScreenProps> = memo(({ navigation }) => {
	const { setCurrentRoute, setPreviousRoute } = useRouteState(state => state)

	const onOnboardingDone = () => {
		navigation.navigate('Auth', { screen: 'SignUp' })
	}

	const joinEvent = () => {
		setPreviousRoute('Onboarding')
		setCurrentRoute('GuestMode')
		navigation.navigate('Guest', { screen: 'JoinEvent' })
	}

	const signUp = () => {
		// setCurrentRoute('Auth')
		setPreviousRoute('Onboarding')
		setCurrentRoute('Auth')
	}
	return <ContentView {...{ onOnboardingDone, joinEvent, signUp }} />
})

export default OnBoarding
