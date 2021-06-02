import { AnimatedTextButton } from '@elements/Button'
import JoinEventInput from '@elements/joinEventInput'
import React from 'react'
import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import { View } from 'react-native-animatable'
import { Div, Text, Icon } from 'react-native-magnus'
import FeatherIcons from 'react-native-vector-icons/Feather'

interface ListHeaderProps {
	goToEventsScreen: () => void
	joinEvent: (eventId: string) => void
}

export const ListHeader = ({ goToEventsScreen, joinEvent }: ListHeaderProps) => {
	const { width } = useWindowDimensions()
	return (
		<>
			<Div p='xl' mb='3xl'>
				<Text my='lg' fontWeight='bold' fontSize='2xl'>
					Hey
				</Text>
				<Text fontWeight='bold' fontSize='2xl'>
					Ready for that event?
				</Text>

				<JoinEventInput onSubmit={joinEvent} />

				<AnimatedTextButton
					fontSize='lg'
					textAlign='center'
					fontWeight='700'
					my='md'
					color='blue600'
					onPress={goToEventsScreen}
				>
					Search for events nearest to you
					<FeatherIcons name='navigation' />
				</AnimatedTextButton>
			</Div>

			<Div h={120} bg='blue500' p='xl' position='absolute' bottom={-50} w={width}>
				<Text color='white'>Top Events you will be interested in...</Text>
			</Div>
		</>
	)
}

/**transform: [{ translateY }],
    //       position: 'absolute',
    //       backgroundColor: 'skyblue',
    //       top: containerPaddingTop,
    //       height: stickyHeaderHeight,
    //       width: '100%', */
