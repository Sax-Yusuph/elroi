import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'react-native-magnus'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/Home'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import MainApp, { DrawerParamsList } from './routes/Main'
import {
	AuthStackParamsList,
	GuestUserStackParamsList,
	OnBoardingParamsList,
	PreferenceStackParamsList,
	StreamStackParamsList,
} from './types/defs/types'
import RNBootSplash from 'react-native-bootsplash'
import { RouteStates, useRouteState } from '@stores'
import { lightTheme } from 'themes'
import { AuthStackNavigator, OnBoardingNavigator, PreferenceNavigator } from './routes/Stacks'
import Preferences from '@screens/Preferences'

export type RootParamsList = {
	OnBoarding: NavigatorScreenParams<OnBoardingParamsList>

	Preferences: NavigatorScreenParams<PreferenceStackParamsList>

	Guest: NavigatorScreenParams<GuestUserStackParamsList>

	Auth: NavigatorScreenParams<AuthStackParamsList> //-->TODO

	App: NavigatorScreenParams<DrawerParamsList>

	StreamEvent: NavigatorScreenParams<StreamStackParamsList>
}

const Root = createStackNavigator()

const RootNavigator: React.FC = () => {
	const { currentRoute } = useRouteState(state => state)
	useEffect(() => {
		StatusBar.setBackgroundColor('white')
	}, [])

	return (
		<ThemeProvider theme={lightTheme}>
			<NavigationContainer onReady={() => RNBootSplash.hide()}>
				<Root.Navigator headerMode='none' mode='modal'>
					{renderScreens(currentRoute)}
				</Root.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}

export default RootNavigator

/****************
 *				*
 *				*
 * 				*
 *				*
 * 				*
 *				*
 * 				*
 *				*
 ****************/

const renderScreens = (currentRoute: RouteStates) => {
	switch (currentRoute) {
		case 'Onboarding':
			return (
				<>
					<Root.Screen name='Onboarding' component={OnBoardingNavigator} />
					<Root.Screen name='Auth' component={AuthStackNavigator} />
				</>
			)

		case 'UserPreferences':
			return <Root.Screen name='Preferences' component={Home} />

		case 'Auth':
			return <Root.Screen name='Auth' component={AuthStackNavigator} />

		case 'GuestMode':
			return (
				<>
					<Root.Screen name='Guest' component={Home} />
					<Root.Screen name='StreamEvent' component={Home} />
				</>
			)

		case 'App':
			return (
				<>
					<Root.Screen name='App' component={MainApp} />
					{/* <Root.Screen name='JoinEvent' component={Home} /> */}
					<Root.Screen name='StreamEvent' component={Home} />
				</>
			)

		default:
			return <Root.Screen name='Auth' component={Home} />
	}
}

/**screenOptions={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          cardStyle: {backgroundColor: 'white'},
        }} */

/**manage states such as streamingOn, onBoardingDone, isAuthenticated */
// const {
//   showOnboarding,
//   showPreferences,
//   showApp,
//   streamingOn,
//   isGuest,
//   showAuth,
// } = useRouteState(state => state);
