import React, { useState } from 'react'
import { Button, Input, Div } from 'react-native-magnus'
import { InputProps } from '@types'

const JoinEventInput = ({ onSubmit }: InputProps) => {
	const [eventId, setEventId] = useState<string>('')
	return (
		<Div row my='xl' mx='xl' justifyContent='center' alignItems='center'>
			<Input
				placeholder='Enter event ID '
				p='lg'
				focusBorderColor='blue700'
				onChangeText={text => setEventId(text)}
				value={eventId}
				fontSize='lg'
				numberOfLines={1}
				maxLength={20}
			/>

			<Button
				variant='brand'
				h={'100%'}
				w={80}
				roundedRight='lg'
				roundedLeft={0}
				onPress={() => onSubmit(eventId)}
				ml={-10}
			>
				JOIN
			</Button>
		</Div>
	)
}

export default JoinEventInput
