/************************ Combined Navigator Props for screens --> level 3 (Top level) nesting ****************/

/**@info here we combined the roots and primary navigator params
 * so has to get correct typings for the deeply nested screens.
 *
 * we then export these props for use in the respective screens
 *
 * --> LOGIC <--
 * CompositeNavigationProp<primary screen, secondary screen>
 */

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SharedElementRoute } from 'react-navigation-shared-element'
import { RootParamsList } from '../..'

import { StreamStackParamsList } from './types'

/** fullscreen event streaming */

export type FullScreenVideoRoute = SharedElementRoute<'FullScreenVideoMode', { videoId: string }>
export interface FullScreenVideoProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<StreamStackParamsList, 'FullScreenVideoMode'>,
		StackNavigationProp<RootParamsList, 'StreamEvent'>
	>
	route: RouteProp<StreamStackParamsList, 'FullScreenVideoMode'>
}

/**  event streaming */
export interface StreamingScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<StreamStackParamsList, 'StreamingScreen'>,
		StackNavigationProp<RootParamsList, 'StreamEvent'>
	>
	route: RouteProp<StreamStackParamsList, 'StreamingScreen'>
}

/**  event transcript */
export interface TranscriptScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<StreamStackParamsList, 'Transcript'>,
		StackNavigationProp<RootParamsList, 'StreamEvent'>
	>
	route: RouteProp<StreamStackParamsList, 'Transcript'>
}
