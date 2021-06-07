import React, { useState } from 'react'
import { Avatar, Div, Text, Icon } from 'react-native-magnus'
import { Participant } from '@types'
import { IconButton } from './Button'

type ItemProps = {
	item: Participant
}

const ParticpantItem = ({ item }: ItemProps) => {
	const [muted, setMuted] = useState(false)

	return (
		<Div row alignItems='center' bg='white' px={'lg'} py='lg' borderWidth={0.5} borderColor='#eee'>
			<Avatar source={item.photo} />
			<Text flex={1} ml='lg'>
				{item.name}
			</Text>
			<IconButton onPress={() => setMuted(p => !p)}>
				<Icon
					fontSize={24}
					color={muted ? 'orange' : 'blue900'}
					name={muted ? 'mic-off' : 'mic'}
					fontFamily='Ionicons'
				/>
			</IconButton>
		</Div>
	)
}

export default ParticpantItem
