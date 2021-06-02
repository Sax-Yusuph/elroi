import { PreferenceScreenProps } from 'navigation/types'
import React, { FC } from 'react'
import ContentView from '@layouts/preferences'
import { OptimizedHeavyScreen } from 'react-navigation-heavy-screen'

const Preferences: FC<PreferenceScreenProps> = ({ navigation }) => {
	const onFinished = () => {
		//@ts-ignore
		navigation.replace('App')
	}

	const goBack = () => {
		navigation.goBack()
	}

	return (
		<OptimizedHeavyScreen>
			<ContentView {...{ onFinished, goBack }} />
		</OptimizedHeavyScreen>
	)
}

export default Preferences
