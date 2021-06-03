import React, { memo } from 'react'

import { RootMainNavigationProp } from '../router/routerTypes'
import ContentView from '@layouts/onboarding'
import useStatusBar from '@hooks/useStatusBar'
import { RootParamsList } from '@navigation/index'
import { StackNavigationProp } from '@react-navigation/stack'
import { useRouteState } from '@stores'
import { OnboardingScreenProps } from 'navigation/types'

const OnBoarding: React.FC<OnboardingScreenProps> = memo(({ navigation }) => {
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

export default OnBoarding
