import { IStreamEvent } from '@types'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Div, Text } from 'react-native-magnus'
import { useCollapsible, AnimatedSection } from '@lib/Accordion'

export const EventAccordion = ({ section, content }: IStreamEvent) => {
	const { animatedHeight, height, onPress, onLayout, state } = useCollapsible()
	return (
		<Div p='xl' bg='white' flex={1}>
			<Div overflow='hidden' bg='white' rounded='lg'>
				<TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
					<Text fontSize='xl' textAlign='center'>
						{section}
					</Text>
				</TouchableOpacity>

				<AnimatedSection {...{ animatedHeight, onLayout, state }}>
					<Div p='lg'>
						<Text>{content}</Text>
					</Div>
				</AnimatedSection>
			</Div>
		</Div>
	)
}
