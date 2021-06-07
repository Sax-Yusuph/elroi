import React, { FC, memo, useEffect, useState } from 'react'
import { NotificationsData as Mockdata } from '@models'
import { Notifications as ContentView } from '@layouts'
import { Notification } from '@types'
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
