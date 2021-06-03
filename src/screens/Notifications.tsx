import React, { FC, memo, useEffect, useState } from 'react'
import { data as Mockdata } from '@layouts/notifications/data'
import ContentView from '@layouts/notifications'
import { Notification } from '@types'
import { StatusBar } from 'react-native-magnus'
import { NotificationScreenProp } from 'navigation/types'

const Notifications: FC<NotificationScreenProp> = memo(({ navigation }) => {
	const [data, setData] = useState<Notification[]>([])

	useEffect(() => {
		setData(Mockdata)
	}, [])

	const onPressItem = (notificationId: string) => {
		navigation.navigate('Notification', { notificationId })
	}

	return (
		<>
			<ContentView {...{ data, onPressItem }} />
		</>
	)
})

export default Notifications
