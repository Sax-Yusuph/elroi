import React, { useEffect, useState } from 'react'
import { OptimizedHeavyScreen } from 'react-navigation-heavy-screen'
import { Notes as ContentView } from '@layouts'
import { StatusBar } from 'react-native-magnus'
import { HomeScreenProp } from 'navigation/types'
import { NotesData } from '@models'
import { useIsFocused } from '@react-navigation/native'
import { Note } from '@types'

const Notes: React.FC<HomeScreenProp> = ({ navigation }) => {
	const [Data, setData] = useState<Note[]>([])
	const isFocused = useIsFocused()

	useEffect(() => {
		setData(NotesData)
	}, [])

	const viewNote = (id: number | string) => {
		// navigation.navigate('')
	}

	return (
		<OptimizedHeavyScreen>
			{isFocused && <StatusBar backgroundColor='gray100' animated />}
			<ContentView {...{ Data, viewNote }} />
		</OptimizedHeavyScreen>
	)
}

export default Notes
