import React, { ReactNode } from 'react'
import { Dimensions } from 'react-native'
import { Div, DivProps, Text } from 'react-native-magnus'
import CustomImage from './Image'

const { width, height } = Dimensions.get('screen')

export type SlideProps = {
	image: number
	title: string
	subtitle?: string
	onPress?: () => void
	isFinal?: boolean
	Indicator?: React.FC<DivProps>
	onSkip?: (a: number) => void
	index?: number
}

const Slide: React.FC<SlideProps> = props => {
	const { image, title, onPress, subtitle, isFinal = false, Indicator, onSkip, index } = props

	return (
		<Div w={width} flex={1} pt={height * 0.13}>
			<Div mx={20} rounded='lg' justifyContent='center' alignItems='center'>
				<CustomImage source={image} style={{ width: 250, height: 250, marginBottom: 20 }} />
			</Div>
			<Text fontSize='3xl' textAlign='center' fontWeight='bold' mb='md'>
				{title}
			</Text>

			<Text fontSize='lg' textAlign='center'>
				{subtitle}
			</Text>
		</Div>
	)
}

export default Slide
