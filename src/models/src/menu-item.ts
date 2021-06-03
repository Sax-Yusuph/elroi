import React from 'react'
import { ImageSourcePropType, ImageStyle } from 'react-native'

export interface MenuItem {
	title: string
	description?: string
	date?: string
	image?: ImageSourcePropType
	venue?: string
	views?: number
	comments?: number
	likes?: number
	interests?: number
	icon: (style: ImageStyle) => React.ReactElement
}
// export interface MenuItem {
//   title: string;
// }
