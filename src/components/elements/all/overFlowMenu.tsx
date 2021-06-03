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
	const Menus: MenuItemProps[] = renderMenuProps(showModal)
	const { width } = useWindowDimensions()

	const BTN_WIDTH = width / 5

	return (
		// <ContextMenu
		// 	style={{ marginHorizontal: 10 }}
		// 	OverflowIcon={({ color }) => (
		// 		<Div>
		// 			<Icon name='menu' fontFamily='Ionicons' fontSize={30} color={color} />
		// 			<Text fontSize='xs'>More</Text>
		// 		</Div>
		// 	)}
		// >
		// 	{Menus.map((props, index) => (
		// 		<MenuItem key={index} {...props} />
		// 	))}
		// </ContextMenu>
		<MenuView
			title='Menu Title'
			onPressAction={({ nativeEvent }) => {
				console.warn(JSON.stringify(nativeEvent))
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

/**1 */
interface MenuItemProps extends IconProps {
	title: string
	onPress?: () => void
}

/**2 */
type MenuParams = ({ type }: { type: ModalTypes }) => void

const renderMenuProps = (showModal: MenuParams): MenuItemProps[] => [
	{
		title: 'Chat Room',
		name: 'chatbox-ellipses-outline',
		onPress: () => showModal({ type: 'chats' }),
	},

	{ title: 'Note', name: 'create-outline', onPress: () => showModal({ type: 'notes' }) },

	{
		title: 'Participants',
		name: 'people-circle-outline',
		onPress: () => showModal({ type: 'particpants' }),
	},

	{
		title: 'Report this host',
		name: 'ios-information-circle',
		onPress: () => showModal({ type: 'report' }),
	},

	{
		title: 'Review this event',
		name: 'heart-outline',
		onPress: () => showModal({ type: 'review' }),
	},

	{ title: 'Follow host', name: 'person-add', onPress: () => showModal({ type: 'follow' }) },
]
