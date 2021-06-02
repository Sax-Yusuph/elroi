import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Icon, Text } from 'react-native-magnus'

type Routes = 'home' | 'favorites' | 'notes' | 'events' | 'more'

interface HomeOptions extends Record<Routes, BottomTabNavigationOptions> {}

export const HOME_TAB_OPTIONS: HomeOptions = {
	home: {
		tabBarIcon: ({ color, size: fontSize }) => (
			<Icon name='ios-home' fontFamily='Ionicons' {...{ color, fontSize }} />
		),
		tabBarLabel: props => (
			<Text fontSize='xs' color={props.color} mb={5}>
				Home
			</Text>
		),
	},

	favorites: {
		tabBarIcon: ({ color, size: fontSize }) => (
			<Icon name='ios-heart' fontFamily='Ionicons' {...{ color, fontSize }} />
		),
		tabBarLabel: props => (
			<Text fontSize='xs' color={props.color} mb={5}>
				Favourites
			</Text>
		),
	},

	notes: {
		tabBarIcon: ({ color, size: fontSize }) => (
			<Icon fontFamily='Ionicons' name='md-create' {...{ color, fontSize }} />
		),
		tabBarLabel: ({ color }) => (
			<Text fontSize='xs' mb={5} {...{ color }}>
				Notes
			</Text>
		),
	},

	events: {
		tabBarIcon: ({ color, size: fontSize }) => (
			<Icon fontFamily='Feather' name='map-pin' {...{ color, fontSize }} />
		),
		tabBarLabel: props => (
			<Text fontSize='xs' color={props.color} mb={5}>
				Events
			</Text>
		),
	},

	more: {
		tabBarIcon: ({ color, size: fontSize }) => (
			<Icon fontFamily='Feather' name='menu' {...{ color, fontSize }} />
		),
		tabBarLabel: ({ color }) => (
			<Text fontSize='xs' mb={5} {...{ color }}>
				More
			</Text>
		),
	},
}
