import { SearchEventInput } from '@elements'
import { Filter } from '@models'
import { EventFilters } from '@elements'
import Filters from 'models/src/mockData'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { Div, Text, Icon, Button } from 'react-native-magnus'

interface ListHeaderProps {
	goToEventsScreen: () => void
	joinEvent: (eventId: string) => void
}

export const ListHeader = ({ goToEventsScreen, joinEvent }: ListHeaderProps) => {
	const { width } = useWindowDimensions()

	const [showFilter, setFilter] = useState<boolean>(false)
	const [selectedFilter, setSelectedFilter] = useState<Filter>('Today')
	const toggleFilter = () => {
		setFilter(prev => !prev)
	}
	const BTN_WIDTH = width / 2 - 35

	return (
		<>
			{showFilter && <EventFilters data={Filters} {...{ selectedFilter, setSelectedFilter }} />}
			<Div px='xl' pb='xl' mb='3xl'>
				{!showFilter && (
					<Text fontWeight='bold' fontSize='2xl'>
						Find Events nearest to you!!
					</Text>
				)}

				<SearchEventInput onSubmit={joinEvent} />

				<Div row justifyContent='center' mt='sm'>
					<Button
						block
						onPress={toggleFilter}
						fontSize='lg'
						w={BTN_WIDTH}
						prefix={
							<Icon
								position='absolute'
								left={-8}
								name='ios-options-outline'
								color='white'
								fontFamily='Ionicons'
								fontSize='2xl'
							/>
						}
						ml='sm'
						rounded='lg'
						px='2xl'
					>
						Filter
					</Button>
					<Button
						block
						fontSize='lg'
						variant='brand'
						w={BTN_WIDTH}
						prefix={
							<Icon
								position='absolute'
								left={-8}
								name='sort-alphabetical-ascending'
								color='white'
								fontFamily='MaterialCommunityIcons'
								fontSize='2xl'
							/>
						}
						ml='sm'
						rounded='lg'
						px='2xl'
					>
						Sort
					</Button>
				</Div>
			</Div>

			<Div h={120} bg='blue500' p='xl' position='absolute' bottom={-50} w={width}>
				<Text color='white'>Top Events you will be interested in...</Text>
			</Div>
		</>
	)
}
