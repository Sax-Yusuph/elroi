import { PreferenceScreenProps } from 'navigation/types'
import React, { FC } from 'react'
import ContentView from '@layouts/preferences'
import { useRouteState } from '@stores'

const Preferences: FC<PreferenceScreenProps> = ({ navigation }) => {
	const { setCurrentRoute } = useRouteState(state => state)
	const onFinished = () => {
		setCurrentRoute('App')
	}

	const goBack = () => {
		//quit app
		navigation.goBack()
	}

	return <ContentView {...{ onFinished, goBack }} />
}

export default Preferences
