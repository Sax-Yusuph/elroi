import React from 'react'
import { useWindowDimensions } from 'react-native'

import { Button, Div } from 'react-native-magnus'
type ListFooterProps = {
	// navigation: Navigation
	onSubmit: () => void
	goBack: () => void
	selectedItemLength: number
}

export const ListFooter = ({ goBack, selectedItemLength, onSubmit }: ListFooterProps) => {
	const { width } = useWindowDimensions()
	const WIDTH = width / 2 - 24
	return (
		<Div row my='2xl'>
			<Button onPress={goBack} mx='lg' w={WIDTH}>
				Back
			</Button>

			<Button onPress={onSubmit} mx='lg' w={WIDTH}>
				{selectedItemLength > 1 ? 'Finish' : 'Skip'}
			</Button>
		</Div>
	)
}
