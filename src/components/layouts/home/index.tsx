import EventCard from '@elements/eventCard'
import { useHeaderHeight } from '@react-navigation/stack'
import { EventData } from '@types'
import React, { useMemo, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, useWindowDimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { StatusBar, useTheme } from 'react-native-magnus'
import { ListHeader } from './extra/header'

type ViewEvent = (id: string) => void

interface Props {
	joinEvent: ViewEvent
	viewEvent: ViewEvent
	goToEventsScreen: () => void
	EventsData: EventData[]
}

export default ({ joinEvent, goToEventsScreen, viewEvent, EventsData }: Props) => {
	const headerHeight = useHeaderHeight()
	const { width } = useWindowDimensions()
	const {
		theme: { colors },
	} = useTheme()

	//@ts-ignore
	const { gray100 } = colors
	const renderHeader = () => <ListHeader {...{ goToEventsScreen, joinEvent }} />

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.select({
				ios: 'padding',
				android: undefined,
			})}
			keyboardVerticalOffset={headerHeight}
		>
			<StatusBar />

			<FlatList
				contentContainerStyle={{ backgroundColor: gray100 }}
				ListHeaderComponent={useMemo(renderHeader, [])}
				data={EventsData}
				renderItem={({ item }) => <EventCard {...{ item, viewEvent }} />}
			/>
		</KeyboardAvoidingView>
	)
}
