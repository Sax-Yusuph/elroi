import React, { useState } from 'react'
import { Div, Icon, IconProps, Text } from 'react-native-magnus'
import { Pressable, StyleProp, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native'
import { ModalTypes } from '@types'
import { HiddenItem, OverflowMenu as ContextMenu } from 'react-navigation-header-buttons'

interface Props {
	showModal: ({ type }: { type: ModalTypes }) => void
	renderColor?: (cond: boolean) => string
}

const OverFlowMenu = ({ showModal }: Props) => {
	const Menus: MenuItemProps[] = renderMenuProps(showModal)

	return (
		<ContextMenu
			style={{ marginHorizontal: 10 }}
			OverflowIcon={({ color }) => (
				<Div>
					<Icon name='menu' fontFamily='Ionicons' fontSize={30} color={color} />
					<Text fontSize='xs'>More</Text>
				</Div>
			)}
		>
			{Menus.map((props, index) => (
				<MenuItem key={index} {...props} />
			))}
		</ContextMenu>
	)
}

export default OverFlowMenu

/**1 */
interface MenuItemProps extends IconProps {
	title: string
	onPress?: () => void
}

const MenuItem = (props: MenuItemProps) => {
	const { title, onPress, ...rest } = props

	return (
		<HiddenItem
			{...{ title, onPress }}
			icon={<Icon {...rest} fontFamily='Ionicons' fontSize='xl' />}
		/>
	)
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
