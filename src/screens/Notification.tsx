import React, { FC, useEffect, useState } from 'react'
import { NotificationsData as Mockdata } from '@models'
import { Notification as ContentView } from '@layouts'
import { Notification } from '@types'
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
