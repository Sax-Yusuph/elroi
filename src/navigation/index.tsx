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
import {
	AuthStackNavigator,
	OnBoardingNavigator,
	PreferenceNavigator,
	StreamingNavigator,
} from './routes/Stacks'
import { OverflowMenuProvider } from 'react-navigation-header-buttons'

export type RootParamsList = {
	OnBoardingMode: NavigatorScreenParams<OnBoardingParamsList>

	PreferenceMode: NavigatorScreenParams<PreferenceStackParamsList>

	Guest: NavigatorScreenParams<GuestUserStackParamsList>

	Auth: NavigatorScreenParams<AuthStackParamsList> //-->TODO

	App: NavigatorScreenParams<DrawerParamsList>

	StreamEvent: NavigatorScreenParams<StreamStackParamsList>
}

const Root = createStackNavigator()

const RootNavigator: React.FC = () => {
	const { currentRoute } = useRouteState(state => state)

	console.log({ currentRoute })
	useEffect(() => {
		StatusBar.setBackgroundColor('white')
	}, [])

	return (
		<ThemeProvider theme={lightTheme}>
			<NavigationContainer onReady={() => RNBootSplash.hide()}>
				<OverflowMenuProvider>
					<Root.Navigator headerMode='none' mode='modal'>
						{renderScreens(currentRoute)}
					</Root.Navigator>
				</OverflowMenuProvider>
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
					<Root.Screen name='OnBoardingMode' component={OnBoardingNavigator} />
					<Root.Screen name='Auth' component={AuthStackNavigator} />
				</>
			)

		case 'UserPreferences':
			return <Root.Screen name='PreferenceMode' component={PreferenceNavigator} />

		case 'Auth':
			return <Root.Screen name='Auth' component={AuthStackNavigator} />

		case 'GuestMode':
			return <Root.Screen name='GuestMode' component={Home} />

		case 'App':
			return <Root.Screen name='App' component={MainApp} />

		case 'EventStream':
			return <Root.Screen name='StreamEvent' component={StreamingNavigator} />

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
