import React, { memo } from 'react'

import { RootMainNavigationProp } from '../router/routerTypes'
import ContentView from '@layouts/onboarding'
import useStatusBar from '@hooks/useStatusBar'
import { RootParamsList } from '@navigation/*'
import { StackNavigationProp } from '@react-navigation/stack'
import { useRouteState } from '@stores'

type Props = { navigation: StackNavigationProp<RootParamsList, 'OnBoarding'> }

const OnBoarding: React.FC<Props> = memo(({ navigation }) => {
	useStatusBar({ hidden: true })

	const { setCurrentRoute } = useRouteState(state => state)

	const onOnboardingDone = () => {
		navigation.navigate('Auth', { screen: 'SignUp' })
	}

	const joinEvent = () => {
		setCurrentRoute('GuestMode')
		navigation.navigate('JoinEvent', { screen: 'JoinEvent' })
	}

	const signUp = () => {
		// setCurrentRoute('Auth')
		navigation.navigate('Auth', { screen: 'SignUp' })
	}
	return <ContentView {...{ onOnboardingDone, joinEvent, signUp }} />
})

export default OnBoarding
