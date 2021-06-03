import { ParamListBase } from '@react-navigation/routers'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorScreenParams, RouteProp } from '@react-navigation/core'
import { ImageProps, ImageSourcePropType } from 'react-native'
import { BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'

export type BottomTabOptions = {
	route: RouteProp<Record<string, object | undefined>, 'More'>
	navigation: any
}

export interface ScreenProps<T extends ParamListBase, K extends string> {
	navigation: StackNavigationProp<T, K>
	route: RouteProp<T, K>
	// Route;
}

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

export type FilterList = ['Today', 'Tomorrow', 'This week', 'This month', 'Next week', 'Next month']

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

/*****************************notifications screens */

export interface Notification {
	content: string
	id: string
}

/*****************************Events**************** */
export interface EventData {
	id: string
	title: string
	subTitle: string
	description?: string
	date: string | Date
	venue: string
	view: number | 0
	likes: number | 0
	comments: number | 0
	interests: number | 0
	image: number
}

/*****************************Streamed Events**************** */
export interface IStreamEvent {
	section: string
	content?: string
	events?: {
		image: string | number
		id: string
	}[]
}

export interface ITranscript {
	eventTitle: string
	status?: 'Live'
	transcript: string
	views: number
}

export interface VideoStream {
	id: string
	source: number
	// source: number;
	// user: string;
	// avatar: number;
	video?: number
}

/***********Stream navighator routes */
export type StreamingRoutes = {
	StreamingScreen: undefined
	Transcript: undefined
	FullScreenVideoMode: { video: VideoStream }
}

export type Participant = {
	photo: ImageSourcePropType
	name: string
}
export type ModalTypes =
	| 'particpants'
	| 'review'
	| 'report'
	| 'follow'
	| 'notes'
	| 'register'
	| 'chats'
	| null

/** streaming screen */
type MenuPressType = 'mic' | 'audio' | 'like' | 'exit'

export interface SBottomNavProps {
	showModal: ({}: { type: ModalTypes }) => void
	handleMenuPress: ({}: { type: MenuPressType }) => void
	muted: boolean
	audioActive: boolean
	liked: boolean
}

export type ReportItemType =
	| 'Profane Language'
	| 'Suspected scam'
	| 'Cyber bullying'
	| 'Discrimination of race'
	| 'Discrimination of gender'
	| 'Discrimination of marital status'
	| 'Discrimination of origin'
	| 'Information tend to compromise the safety or security of the public or public systems'
	| 'Encouragement of illegal activity'
	| 'Inappropriate sexual content or Links to inappropriate sexual content'
	| 'Contents not topically related to the purpose of the event'
	| 'Disclosure of private and confidential information'

export interface ReviewEventProps {
	onFinishRating: (rating: number, cb: () => void) => void
	onFinishReview: (data: any) => void
}

/*** chat messaging */

export interface IMessage {
	_id: string | number
	text: string
	createdAt: Date | number
	user: User
	image?: string
	video?: string
	audio?: string
	system?: boolean
	sent?: boolean
	received?: boolean
	pending?: boolean
	quickReplies?: QuickReplies
}

type User = {
	_id: number
	name: string
	avatar?: string
}

interface Reply {
	title: string
	value: string
	messageId?: any
}

interface QuickReplies {
	type: 'radio' | 'checkbox'
	values: Reply[]
	keepIt?: boolean
}
