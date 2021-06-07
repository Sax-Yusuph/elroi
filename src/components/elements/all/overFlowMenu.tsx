import React, { useState } from 'react'
import { Div, Icon, IconProps, Text } from 'react-native-magnus'
import { Platform, Pressable, useWindowDimensions } from 'react-native'
import { ModalTypes } from '@types'
import { HiddenItem, OverflowMenu as ContextMenu } from 'react-navigation-header-buttons'

import { MenuView } from '@react-native-menu/menu'
import { EventMenuActions } from '@models'

interface Props {
	showModal: ({ type }: { type: ModalTypes }) => void
	renderColor?: (cond: boolean) => string
}

const OverFlowMenu = ({ showModal }: Props) => {
	const { width } = useWindowDimensions()

	const BTN_WIDTH = width / 5

	return (
		<MenuView
			title='Menu Title'
			onPressAction={({ nativeEvent }) => {
				const modaltype = nativeEvent.event as ModalTypes

				showModal({ type: modaltype })
				// console.warn(JSON.stringify(nativeEvent))
			}}
			actions={EventMenuActions}
		>
			<Pressable>
				{({ pressed }) => (
					<Div
						justifyContent='center'
						alignItems='center'
						bg={pressed ? 'gray100' : 'transparent'}
						borderColor='gray300'
						borderWidth={pressed ? 1 : 0}
						rounded='circle'
						py='lg'
						w={BTN_WIDTH}
					>
						<Icon name='menu' color='blue900' fontFamily='Ionicons' fontSize={30} />
						<Text fontSize='xs'>More</Text>
					</Div>
				)}
			</Pressable>
		</MenuView>
	)
}

export default OverFlowMenu
