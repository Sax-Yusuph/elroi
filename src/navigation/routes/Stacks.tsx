import React, { FC } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import OnBoarding from '@screens/OnBoarding'
import SignIn from '@screens/SignIn'
import SignUp from '@screens/signUp'
import PreferenceScreen from '@screens/Preferences'
import {
	PreferenceStackParamsList,
	AuthStackParamsList,
	OnBoardingParamsList,
	HomeStackParamsList,
	FavouriteStackParamsList,
	EventsStackParamsList,
	NotesStackParamsList,
	StreamStackParamsList,
} from 'navigation/types'
import HomeScreen from '@screens/Home'
import FavoritesScreen from '@screens/Favourites'
import EventScreen from '@screens/Events'
import SingleEventScreen from '@screens/SingleEvent'
import NoteScreen from '@screens/Notes'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import Notifications from '@screens/Notifications'
import { HeaderLeft, HeaderRight } from '@elements'
import SingleNotification from '@screens/Notification'
import EventStream from '@screens/eventStream'
import Transcript from '@screens/Transcript'
import FullScreenVideoMode from '@screens/FullScreenMode'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

// import NotesScreen from '@scenes/notes/notes.scene';
// import EventScreen from '@scenes/events/events.scene';
// import SingleEventScreen from '@scenes/events/event.scene';
// import RegisterForEvent from '@scenes/events/registerEvent.scene';
// import OnboardingScreen from '@scenes/onboarding';
// import PreferencesScreen from '@scenes/preferences/preference.scene';
// import {AuthNavigator} from './auth.navigator';
// import HomeScreen from '@scenes/home';
// import JoinEventScreen from '@scenes/joinEvent/joinEvent.scene';
// import NotificationsScreen from '@scenes/notifications/notifications.scene';
// import NotificationScreen from '@scenes/notifications/notification.scene';
// import SignUpScreen from '@scenes/auth/signup';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import StreamingScreen from '@scenes/streamer';
// import Transcript from '@scenes/streamer/transcript';
// import FullScreenMode from '@scenes/fullscreenMode';
// import {
//   AuthStackParamsList,
//   EventsStackParamsList,
//   FavouriteStackParamsList,
//   HomeStackParamsList,
//   NotesStackParamsList,
//   OnBoardingParamsList,
//   PreferenceStackParamsList,
//   StreamStackParamsList,
// } from '@types';
// import FavoritesScreen from '@scenes/favorites/favourites.scene';

const EventsStack = createStackNavigator<EventsStackParamsList>()
const Preferences = createStackNavigator<PreferenceStackParamsList>()
const Onboarding = createStackNavigator<OnBoardingParamsList>()
const Auth = createStackNavigator<AuthStackParamsList>()
const Notes = createStackNavigator<NotesStackParamsList>()
const AppHome = createStackNavigator<HomeStackParamsList>()
const Favorites = createStackNavigator<FavouriteStackParamsList>()

//shared elements for smooth screen animations
const Streaming = createSharedElementStackNavigator<StreamStackParamsList>()

export const EventsNavigator = (): React.ReactElement => (
	<EventsStack.Navigator>
		<EventsStack.Screen name='EventScreen' component={EventScreen} options={{ title: 'Events' }} />
		<EventsStack.Screen
			name='SingleEvent'
			component={SingleEventScreen}
			options={{ headerTitle: 'Event' }}
		/>
		{/* <EventsStack.Screen name="RegisterForEvent" component={RegisterForEvent} />  */}
	</EventsStack.Navigator>
)

// /**userPreferences */

export const PreferenceNavigator = (): React.ReactElement => (
	<Preferences.Navigator headerMode='none'>
		<Preferences.Screen name='Preferences' component={PreferenceScreen} />
	</Preferences.Navigator>
)

export const OnBoardingNavigator: FC = () => (
	<Onboarding.Navigator headerMode='none'>
		<Onboarding.Screen name='Onboarding' component={OnBoarding} />
	</Onboarding.Navigator>
)

export const AuthStackNavigator: FC = () => (
	<Auth.Navigator>
		<Auth.Screen
			name='SignUp'
			component={SignUp}
			options={{ title: ' Sign up', headerTransparent: true, headerTintColor: 'white' }}
		/>
	</Auth.Navigator>
)

export const NotesNavigator = (): React.ReactElement => (
	<Notes.Navigator>
		<Notes.Screen name='NoteScreen' component={NoteScreen} options={{ title: 'Note' }} />
		<Notes.Screen name='Note' component={NoteScreen} />
	</Notes.Navigator>
)

export const HomeNavigator = (): React.ReactElement => (
	<AppHome.Navigator>
		<AppHome.Screen
			name='HomeScreen'
			component={HomeScreen}
			options={props => ({
				headerTitle: 'Home',
				headerLeft: () => <HeaderLeft {...props} />,
				headerRight: () => <HeaderRight {...props} />,
			})}
		/>
		<AppHome.Screen name='Notifications' component={Notifications} />
		<AppHome.Screen name='Notification' component={SingleNotification} />
	</AppHome.Navigator>
)
/** event streaming screen configuration */
// This Spec makes it so that the animation goes from 1000ms (very slow) to 500ms (acceptable) speed! You can also remove it if you want.
export const iosTransitionSpec: TransitionSpec = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 10,
		restSpeedThreshold: 10,
	},
}

export const StreamingNavigator = (): React.ReactElement => (
	<Streaming.Navigator
		// screenOptions={{
		// 	gestureEnabled: false,
		// 	...TransitionPresets.ModalSlideFromBottomIOS,
		// 	transitionSpec: {
		// 		open: iosTransitionSpec,
		// 		close: iosTransitionSpec,
		// 	},
		// 	cardStyleInterpolator: ({ current: { progress } }) => ({
		// 		cardStyle: {
		// 			opacity: progress,
		// 		},
		// 	}),
		// }}
		screenOptions={{
			gestureEnabled: false,
			headerShown: false,
			cardOverlayEnabled: true,
			cardStyle: { backgroundColor: 'transparent' },
		}}
		headerMode='none'
	>
		<Streaming.Screen name='StreamingScreen' component={EventStream} />
		<Streaming.Screen name='Transcript' component={Transcript} />
		<Streaming.Screen
			name='FullScreenVideoMode'
			component={FullScreenVideoMode}
			sharedElementsConfig={(route: any) => {
				const { video } = route.params

				return [{ id: video.id }]
			}}
		/>
	</Streaming.Navigator>
)

export const FavouritesNavigator = (): React.ReactElement => (
	<Favorites.Navigator>
		<Favorites.Screen
			name='FavoriteScreen'
			component={FavoritesScreen}
			options={{ title: 'Favourites' }}
		/>
		<Favorites.Screen name='Favorite' component={FavoritesScreen} />
	</Favorites.Navigator>
)
