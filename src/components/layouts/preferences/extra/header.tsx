import { ImageOverlay, OverlayImageStyle } from '@elements'
import React from 'react'

import { useWindowDimensions } from 'react-native'
import { Text } from 'react-native-magnus'

const OVERLAY_HEIGHT = 150

export const ListHeader = () => {
	const { width } = useWindowDimensions()

	const ImageOverlayStyle: OverlayImageStyle = {
		minHeight: OVERLAY_HEIGHT,
		paddingHorizontal: 16,
		paddingTop: 24,
		paddingBottom: 44,
		overlayColor: 'rgba(0,0,0,0.3)',
		width,
	}
	return (
		<>
			<ImageOverlay style={ImageOverlayStyle} source={require('@assets/img/svgs/patternpad.png')} />
			<Text fontWeight='bold' mx='lg' my='xl'>
				Choose your interests and get personalized event feeds and suggestions
			</Text>
		</>
	)
}
