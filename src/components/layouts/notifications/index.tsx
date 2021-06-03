import React, { memo } from 'react'

import { NotificationCard } from '@elements'
import { useIsFocused } from '@react-navigation/core'
import { Notification } from '@types'
import { FlatList } from 'react-native'
import { Div, StatusBar } from 'react-native-magnus'

interface Props {
	data: Notification[]
	onPressItem: (notificationId: string) => void
}
export default memo(({ data, onPressItem }: Props) => {
	const isFocused = useIsFocused()
	return (
		<Div bg='gray100'>
			{isFocused && <StatusBar backgroundColor='gray100' hidden={false} animated />}
			<FlatList
				data={data}
				keyExtractor={(_, i) => i.toString()}
				renderItem={({ item }) => <NotificationCard {...{ item, onPressItem }} />}
			/>
		</Div>
	)
})
