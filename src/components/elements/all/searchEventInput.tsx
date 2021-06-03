import React, { useState } from 'react'
import { Button, Input, Div, Icon } from 'react-native-magnus'
import { InputProps } from '@models'

const SearchEventInput = ({ onSubmit }: InputProps) => {
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
				w={60}
				roundedRight='lg'
				roundedLeft={0}
				onPress={() => onSubmit(eventId)}
				ml={-10}
			>
				<Icon name='search' color='white' fontFamily='Feather' fontSize='3xl' />
			</Button>
		</Div>
	)
}

export default SearchEventInput
