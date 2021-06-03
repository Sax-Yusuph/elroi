import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DrawerActions, NavigatorScreenParams } from '@react-navigation/native'
import { Icon, Text } from 'react-native-magnus'
import Home from '@screens/Home'
import React from 'react'
import {
	HomeStackParamsList,
	FavouriteStackParamsList,
	NotesStackParamsList,
	EventsStackParamsList,
} from '../types'
import { HOME_TAB_OPTIONS } from './options'
import { EventsNavigator, FavouritesNavigator, HomeNavigator, NotesNavigator } from './Stacks'
import { useRouteState } from '@stores'

export type HomeTabsParamsList = {
	Home: NavigatorScreenParams<HomeStackParamsList>
	Favorites: NavigatorScreenParams<FavouriteStackParamsList>
	Notes: NavigatorScreenParams<NotesStackParamsList>
	Events: NavigatorScreenParams<EventsStackParamsList>
	More: undefined // has to open a drawer menu
}

//TODO --> insert correct types
export type EventHostTabsParamsList = {
	Home: NavigatorScreenParams<HomeStackParamsList>
	Favorites: NavigatorScreenParams<FavouriteStackParamsList>
	Notes: NavigatorScreenParams<NotesStackParamsList>
	Events: NavigatorScreenParams<EventsStackParamsList>
	More: undefined // has to open a drawer menu
}

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>()
const HostEventTabs = createBottomTabNavigator<EventHostTabsParamsList>()

export const HomeBottomTabs = () => {
	return (
		<HomeTabs.Navigator initialRouteName='Home'>
			<HomeTabs.Screen name='Home' component={HomeNavigator} options={HOME_TAB_OPTIONS.home} />

			<HomeTabs.Screen
				name='Favorites'
				component={FavouritesNavigator}
				options={HOME_TAB_OPTIONS.favorites}
			/>

			<HomeTabs.Screen name='Notes' component={NotesNavigator} options={HOME_TAB_OPTIONS.notes} />

			<HomeTabs.Screen
				name='Events'
				component={EventsNavigator}
				options={HOME_TAB_OPTIONS.events}
			/>

			<HomeTabs.Screen
				name='More'
				component={Home}
				options={HOME_TAB_OPTIONS.more}
				listeners={({ navigation }) => ({
					tabPress: e => {
						e.preventDefault()
						navigation.dispatch(DrawerActions.openDrawer())
					},
				})}
			/>
		</HomeTabs.Navigator>
	)
}

export const EventHostBottomTabs = () => {
	return (
		<HostEventTabs.Navigator
			screenOptions={{ tabBarVisible: true }} //TabBarVisibiltiyOptions
		>
			<HostEventTabs.Screen name='Home' component={Home} />
			<HostEventTabs.Screen name='Favorites' component={Home} />
			<HostEventTabs.Screen name='Notes' component={Home} />
			<HostEventTabs.Screen name='Events' component={Home} />
			<HostEventTabs.Screen name='More' component={Home} />
		</HostEventTabs.Navigator>
	)
}
