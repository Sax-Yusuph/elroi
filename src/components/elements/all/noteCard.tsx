import { Note } from '@layouts/notes/extra/data'
import { format } from 'date-fns'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Text } from 'react-native-magnus'
import { AnimatedPress } from './Button'

interface Props {
	item: Note

	viewNote: (noteId: string | number) => void
}
const NoteCard = ({ item, viewNote }: Props) => {
	const { width } = useWindowDimensions()

	const WIDTH = width / 2 - 25
	return (
		<AnimatedPress
			m='lg'
			w={WIDTH}
			h={WIDTH}
			onPress={() => viewNote(item.id)}
			borderColor='gray400'
			borderWidth={1}
			p='lg'
			rounded='lg'
			bg='gray200'
		>
			<Text color='gray500' fontSize='sm'>
				{format(new Date(), 'MMM, dd, yyyy')}
			</Text>
			<Text fontWeight='bold' my='lg' numberOfLines={1}>
				{item.content.slice(0, 15)}
			</Text>
			<Text my='lg' numberOfLines={3} fontSize='lg'>
				{item.content.slice(15)}
			</Text>
		</AnimatedPress>
	)
}

export default NoteCard
