import { IStreamEvent } from '@types'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Div, Icon, Text } from 'react-native-magnus'
import { useCollapsible, AnimatedSection } from '@lib/Accordion'
import { Pressable } from 'react-native'
import CustomImage from './Image'

export const EventAccordion = ({ section, content, events }: IStreamEvent) => {
	const { animatedHeight, height, onPress, onLayout, state } = useCollapsible()
	return (
		<Div overflow='hidden' bg='white' rounded='lg' m='lg' my='md' p='lg' flex={1} shadow='xs'>
			<Pressable onPress={onPress} style={{ paddingLeft: 5 }}>
				{({ pressed }) => (
					<Div row justifyContent='space-between' alignItems='center'>
						<Text fontSize={18} fontWeight='bold' textAlign='left'>
							{section}
						</Text>
						<Div rounded='circle' bg={pressed ? 'gray200' : undefined} p='lg'>
							<Icon name='chevron-down' fontFamily='Entypo' fontSize={28} />
						</Div>
					</Div>
				)}
			</Pressable>

			<AnimatedSection {...{ animatedHeight, onLayout, state }}>
				<Div p='lg'>
					{content ? (
						<Text>{content}</Text>
					) : events ? (
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							data={events}
							renderItem={({ item }) => (
								<CustomImage
									source={item.image}
									style={{ width: 200, aspectRatio: 1, marginRight: 10, borderRadius: 10 }}
								/>
							)}
						/>
					) : null}
				</Div>
			</AnimatedSection>
		</Div>
	)
}
