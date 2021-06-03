import React, { FC, useEffect, useState } from 'react'
import { data as Mockdata } from '@layouts/notifications/data'
import ContentView from '@layouts/notification'
import { Notification } from '@types'
import { StatusBar } from 'react-native-magnus'
import { SingleNotificationScreenProp } from 'navigation/types'

const SingleNotification: FC<SingleNotificationScreenProp> = ({ route, navigation }) => {
	const [data, setData] = useState<Notification | null>(null)

	useEffect(() => {
		const { notificationId } = route.params
		const notification = Mockdata.find(data => data.id === notificationId)

		if (notification) {
			setData(notification)
		}
	}, [])

	const onPressItem = (notificationId: string) => {}

	return (
		<>
			<ContentView {...{ data, onPressItem }} />
		</>
	)
}

export default SingleNotification
