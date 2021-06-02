import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Div, StatusBar } from 'react-native-magnus'
import Data from './extra/data'
import PreferencesCardItem from '@elements/preferenceCard'
import { Interests } from '@models/app.model'
import { ListHeader } from './extra/header'
import { ListFooter } from './extra/footer'

type Props = {
	onFinished: () => void
	goBack: () => void
}

export default ({ onFinished, goBack }: Props) => {
	const [selectedItem, onSelectItem] = useState<Interests[]>([])

	const onSubmit = () => {
		onFinished()
	}

	const selectedItemLength = selectedItem.length
	console.log(selectedItem)

	return (
		<Div flex={1} bg='white'>
			<StatusBar backgroundColor='blue800' />

			<FlatList
				contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
				ListHeaderComponent={<ListHeader />}
				ListFooterComponent={<ListFooter {...{ onSubmit, selectedItemLength, goBack }} />}
				data={Data}
				keyExtractor={item => item.title}
				numColumns={3}
				renderItem={({ item }) => <PreferencesCardItem {...{ item, onSelectItem }} />}
			/>
		</Div>
	)
}
