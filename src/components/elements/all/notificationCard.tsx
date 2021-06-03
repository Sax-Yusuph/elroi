import { format } from 'date-fns'
import React, { memo } from 'react'
import { Text } from 'react-native-magnus'
import { AnimatedPress } from './Button'
import { Notification } from '@types'

interface Props {
	item: Notification
	onPressItem: (notificationId: string) => void
}

const NotificationCard = memo(({ item, onPressItem }: Props) => {
	return (
		<AnimatedPress
			onPress={() => onPressItem(item.id)}
			m='lg'
			my='sm'
			p='lg'
			py='lg'
			bg='white'
			rounded='md'
			shadow='xs'
		>
			<Text numberOfLines={2}>{item.content}</Text>
			<Text color='gray600' mt='lg'>
				{format(new Date(), 'MM/dd/yyyy')}
			</Text>
		</AnimatedPress>
	)
})

export default NotificationCard
