import { Button, Div, Icon, Text } from 'react-native-magnus'
import React from 'react'
import { Pressable, useWindowDimensions } from 'react-native'

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
		<Pressable {...{ onPress }} style={{ width: BTN_WIDTH }}>
			{({ pressed }) => (
				<Div
					justifyContent='center'
					alignItems='center'
					bg={pressed ? 'gray100' : 'transparent'}
					borderColor='gray300'
					borderWidth={pressed ? 1 : 0}
					rounded='circle'
					py='lg'
				>
					<Icon
						fontSize={24}
						fontFamily='Ionicons'
						name={icon}
						color={cond ? 'red600' : 'blue900'}
					/>
					<Text fontSize='xs' fontWeight='600' color={cond ? 'red500' : 'gray800'}>
						{text}
					</Text>
				</Div>
			)}
		</Pressable>
	)
}

export default MenuButton
