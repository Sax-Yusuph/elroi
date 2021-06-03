import { MenuAction } from '@react-native-menu/menu'
import { Platform } from 'react-native'

export const EventMenuActions: MenuAction[] = [
	// {
	// 	id: 'add',
	// 	title: 'Add to List',
	// 	titleColor: '#2367A2',
	// 	image: Platform.select({
	// 		ios: 'plus',
	// 		android: 'ic_menu_add',
	// 	}),
	// 	imageColor: '#2367A2',
	// 	subactions: [
	// 		{
	// 			id: 'nested1',
	// 			title: 'Nested action',
	// 			titleColor: 'rgba(250,180,100,0.5)',
	// 			subtitle: 'State is mixed',
	// 			image: Platform.select({
	// 				ios: 'heart.fill',
	// 				android: 'ic_menu_today',
	// 			}),
	// 			imageColor: 'rgba(100,200,250,0.3)',
	// 			state: 'mixed',
	// 		},
	// 		{
	// 			id: 'nestedDestructive',
	// 			title: 'Destructive Action',
	// 			attributes: {
	// 				destructive: true,
	// 			},
	// 			image: Platform.select({
	// 				ios: 'trash',
	// 				android: 'ic_menu_delete',
	// 			}),
	// 		},
	// 	],
	// },
	{
		id: 'chats',
		title: 'Chat Room',
		subtitle: 'Enter chat room',
		titleColor: '#2a4365',
		image: Platform.select({
			ios: 'square.and.arrow.up',
			android: 'ic_menu_share',
		}),
		imageColor: '#46F289',
		state: 'on',
	},
	{
		id: 'notes',
		title: 'Note',
		titleColor: '#2a4365',
		subtitle: 'Take down some notes',
		// image: Platform.select({
		// 	ios: 'heart.fill',
		// 	android: 'ic_menu_today',
		// }),
		imageColor: '#2a4365',
		state: 'mixed',
	},
	{
		id: 'particpants',
		title: 'Participants',
		titleColor: '#2a4365',
		subtitle: 'View participants of this event',
		attributes: {
			// disabled: true,
		},
		// image: Platform.select({
		// 	ios: 'tray',
		// 	android: 'ic_menu_agenda',
		// }),
	},
	{
		id: 'report',
		title: 'Report this host',
		subtitle: 'Report any illegal activity',
		titleColor: '#2a4365',
		attributes: {
			// hidden: true,
		},
	},
	{
		id: 'review',
		title: 'Review this event',
		titleColor: '#2a4365',
		attributes: {
			// destructive: true,
		},
		// image: Platform.select({
		// 	ios: 'trash',
		// 	android: 'ic_menu_delete',
		// }),
	},
]
