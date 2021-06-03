import { Button, Div, Icon, Text } from 'react-native-magnus'
import React from 'react'
import { useWindowDimensions } from 'react-native'

interface MenuButtonProps {
	onPress: () => void
	color: string
	text: string
	cond?: boolean
	icon: string
}

interface PressProps {
	pressed: boolean
}

const MenuButton = ({ onPress, color, text, cond, icon }: MenuButtonProps) => {
	const { width } = useWindowDimensions()

	const BTN_WIDTH = width / 5
	return (
		<Button bg='transparent' rounded='circle' {...{ onPress }} w={BTN_WIDTH}>
			<Div justifyContent='center' alignItems='center'>
				<Icon fontSize={24} fontFamily='Ionicons' name={icon} color={cond ? 'red600' : 'gray800'} />
				<Text fontSize='xs' fontWeight='600' color={cond ? 'red500' : 'gray800'}>
					{text}
				</Text>
			</Div>
		</Button>
	)
}

export default MenuButton
