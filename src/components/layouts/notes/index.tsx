import NoteCard from '@elements/noteCard'
import { ScreenProps } from '@types'
import { format } from 'date-fns'
import React from 'react'
import { Image, StyleSheet, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { FlatList } from 'react-native-gesture-handler'
import { Div, Text } from 'react-native-magnus'
import { Note } from './extra/data'

interface Props {
	viewNote: (noteId: string | number) => void
	Data: Note[]
}

const NotesScreen = ({ viewNote, Data }: Props) => {
	const { height } = useWindowDimensions()
	return (
		<Div bg='gray100' justifyContent='center' alignItems='center'>
			<FlatList
				data={Data}
				numColumns={2}
				keyExtractor={(_, i) => i.toString()}
				renderItem={({ item }) => <NoteCard {...{ item, viewNote }} />}
				ListEmptyComponent={
					<Div alignItems='center' pt='2xl' minH={height}>
						<FastImage
							source={require('@assets/img/pngs/notes.png')}
							style={{
								width: 120,
								height: 120,
							}}
						/>
						<Text mr='lg' mt='md' textAlign='center'>
							You have no saved notes here!
						</Text>
						<Text mr='lg' mt='md' textAlign='center' color='gray500'>
							Make notes while in an event and save to review later
						</Text>
					</Div>
				}
			/>
		</Div>
	)
}

export default NotesScreen
