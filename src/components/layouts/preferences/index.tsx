import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Div, StatusBar } from 'react-native-magnus'
import Data from './extra/data'
import { ListHeader } from './extra/header'
import { ListFooter } from './extra/footer'
import { FocusAwareStatusBar, PreferencesCardItem } from '@elements'
import { Interests } from '@models'

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
			<FocusAwareStatusBar backgroundColor='blue800' />

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
