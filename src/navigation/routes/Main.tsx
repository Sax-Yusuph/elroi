import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
	EventHostBottomTabs,
	EventHostTabsParamsList,
	HomeBottomTabs,
	HomeTabsParamsList,
} from './Layout'
import { NavigatorScreenParams } from '@react-navigation/native'

export type DrawerParamsList = {
	Home: NavigatorScreenParams<HomeTabsParamsList>
	Host: NavigatorScreenParams<EventHostTabsParamsList>
	Profile: undefined
	Settings: undefined
	Help: undefined
	SendFeedBack: undefined
	PrivacyPolicy: undefined
}

const MainAppDrawer = createDrawerNavigator<DrawerParamsList>()

const MainApp = () => {
	return (
		<MainAppDrawer.Navigator initialRouteName='Home'>
			<MainAppDrawer.Screen name='Home' component={HomeBottomTabs} />
			<MainAppDrawer.Screen name='Host' component={EventHostBottomTabs} />
		</MainAppDrawer.Navigator>
	)
}

export default MainApp
