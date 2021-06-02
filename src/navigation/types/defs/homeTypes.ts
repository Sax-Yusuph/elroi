/************************ Combined Navigator Props for screens --> level 3 (Top level) nesting ****************/

/**@info here we combined the roots and primary navigator params
 * so has to get correct typings for the deeply nested screens.
 *
 * we then export these props for use in the respective screens
 *
 * --> LOGIC <--
 * CompositeNavigationProp<primary screen, secondary screen>
 */

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeTabsParamsList } from 'navigation/routes/Layout'
import { DrawerParamsList } from 'navigation/routes/Main'
import { RootParamsList } from '../..'
import {
	EventsStackParamsList,
	NotesStackParamsList,
	HomeStackParamsList,
	FavouriteStackParamsList,
} from './types'

export type AppRootParams = CompositeNavigationProp<
	DrawerNavigationProp<DrawerParamsList, 'Home'>,
	StackNavigationProp<RootParamsList, 'App'>
>

/**************************Event screen **************************************/
export type EventNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeTabsParamsList, 'Events'>,
	AppRootParams
>

//1
export interface EventScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<EventsStackParamsList, 'Events'>,
		EventNavigationProp
	>
	route: RouteProp<EventsStackParamsList, 'Events'>
}

//2
export interface SingleEventScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<EventsStackParamsList, 'SingleEvent'>,
		EventNavigationProp
	>
	route: RouteProp<EventsStackParamsList, 'SingleEvent'>
}

//3
export interface RegisterEventScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<EventsStackParamsList, 'RegisterForEvent'>,
		EventNavigationProp
	>
	route: RouteProp<EventsStackParamsList, 'RegisterForEvent'>
}

/**************************Notes screen **************************************/

export type NotesNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeTabsParamsList, 'Notes'>,
	AppRootParams
>

//1
export interface NotesScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<NotesStackParamsList, 'Notes'>,
		NotesNavigationProp
	>
	route: RouteProp<NotesStackParamsList, 'Notes'>
}

//2
export interface SingleNoteScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<NotesStackParamsList, 'Note'>,
		NotesNavigationProp
	>
	route: RouteProp<NotesStackParamsList, 'Note'>
}

/**************************Home screen **************************************/
export type HomeNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeTabsParamsList, 'Home'>,
	AppRootParams
>

//1
export interface HomeScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<HomeStackParamsList, 'Home'>,
		HomeNavigationProp
	>
	route: RouteProp<HomeStackParamsList, 'Home'>
}

//2
export interface NotificationScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<HomeStackParamsList, 'Notifications'>,
		HomeNavigationProp
	>
	route: RouteProp<HomeStackParamsList, 'Notifications'>
}

//3
export interface SingleNotificationScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<HomeStackParamsList, 'Notification'>,
		HomeNavigationProp
	>
	route: RouteProp<HomeStackParamsList, 'Notification'>
}

/**************************Favourites screen **************************************/
export type FavouriteNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeTabsParamsList, 'Favorites'>,
	AppRootParams
>

//1
export interface FavoriteScreenProp {
	navigation: CompositeNavigationProp<
		StackNavigationProp<FavouriteStackParamsList, 'Favorites'>,
		FavouriteNavigationProp
	>
	route: RouteProp<FavouriteStackParamsList, 'Favorites'>
}
