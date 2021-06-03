import React from 'react'
import { toProperCase } from '@lib/helpers'
import { Div, Text, Icon } from 'react-native-magnus'

interface StatusProps {
	eventTitle: string
	status: 'Live' | undefined
	views: number
}

const EventStatus = ({ eventTitle, status, views }: StatusProps) => {
	const viewing = views > 1000 ? views.toString()[0] + 'k' : views

	return (
		<Div row alignItems='center' justifyContent='center' h={40} pl='md' py='xl' bg='yellow100'>
			<Div position='absolute' left={10}>
				<Text fontSize='sm' fontWeight='bold' numberOfLines={2} maxW='80%'>
					{toProperCase(eventTitle)}
				</Text>
			</Div>

			<Div row position='absolute' right={8}>
				{status ? (
					<Div w={50} h={30} bg='red' mx='md' justifyContent='center' alignItems='center'>
						<Text fontSize='xs' color='white'>
							{status}
						</Text>
					</Div>
				) : null}

				<Div w={54} h={30} mx='sm' row bg='black' justifyContent='flex-start' alignItems='center'>
					<Icon name='eye' fontSize='xs' p='md' />
					<Text fontSize='xs' color='white'>
						{viewing}
					</Text>
				</Div>
			</Div>
		</Div>
	)
}

export default EventStatus
