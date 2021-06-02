import { ImageSourcePropType } from 'react-native'

export interface LayoutItem {
	title: string
	description: string
	date: string
	image: ImageSourcePropType
	venue: string
	views: number
	comments: number
	likes: number
	interests: number
}
