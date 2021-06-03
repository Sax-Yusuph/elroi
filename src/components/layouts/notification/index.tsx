import { useIsFocused } from '@react-navigation/core'
import { Notification } from '@types'
import { format } from 'date-fns'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Div, ScrollDiv, StatusBar, Text } from 'react-native-magnus'

interface Props {
	data: Notification | null
	onPressItem: (notificationId: string) => void
}
export default ({ data, onPressItem }: Props) => {
	const { height } = useWindowDimensions()
	const isFocused = useIsFocused()
	const MIN_HEIGHT = height / 1.2
	return (
		<ScrollDiv bg='gray100' flex={1}>
			{isFocused && <StatusBar backgroundColor='gray100' hidden={false} animated />}
			<Div bg='white' p='xl' my='sm' mx='lg' minH={MIN_HEIGHT} rounded='md'>
				<Text fontSize='lg' fontFamily='Inter-Medium' lineHeight={26} color='gray700'>
					{data?.content}
				</Text>

				<Div alignSelf='flex-end' mt='2xl'>
					<Text fontSize='md' color='gray600'>
						{format(new Date(), 'MM/dd/yyyy')}
					</Text>
				</Div>
			</Div>
		</ScrollDiv>
	)
}
