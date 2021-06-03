import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

export interface Eva extends Record<string, any> {}

interface Route extends RouteProp<Record<string, object | undefined>, string> {
	state?: any
}

export type Navigation = StackNavigationProp<any, any>

export interface ScreenOptions {
	route: Route
	navigation?: any
}

export interface InputProps {
	onSubmit: (text: string) => void
}

export type Filter = 'Today' | 'Tomorrow' | 'This week' | 'This month' | 'Next week' | 'Next month'

export type FilterList = Filter[]

export type HeaderAppearance = 'default' | 'control'

export type Interests =
	| 'Spirituality'
	| 'Finance'
	| 'Education'
	| 'Music'
	| 'Media'
	| 'Technology'
	| 'Food'
	| 'Health'
	| 'Career'
	| 'Arts'
	| 'Fashion'
	| 'Charity'

/************************Preference screen*********************** */

export interface UserInterest {
	icon: any
	title: Interests
}

export interface VideoItem {
	id: string
	imageSource?: number | string
	user: string
	// avatar: require('./assets/avatars/derek.russel.png'),
	video: number //change to string later
}
