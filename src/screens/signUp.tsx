import React from 'react'
import { Signup as ContentView } from '@layouts'
import useStatusBar from '@hooks/useStatusBar'
import { AuthScreenProps } from 'navigation/types/defs/others'
import { useAppState } from 'stores/parts/themeStore'
import { useRouteState } from '@stores'

const SignUp: React.FC<AuthScreenProps> = ({ navigation }) => {
	useStatusBar({ hidden: false })

	const { hasPreferences } = useAppState(state => state)
	const { setCurrentRoute } = useRouteState(state => state)

	const handleSignUp = () => {
		console.log('pressed')
		if (hasPreferences) {
			//@ts-ignore
			setCurrentRoute('App')
		} else {
			setCurrentRoute('UserPreferences')
		}
	}

	return <ContentView handleSignUp={handleSignUp} />
}

export default SignUp
