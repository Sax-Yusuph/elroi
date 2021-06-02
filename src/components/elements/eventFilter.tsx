import React, { Dispatch, SetStateAction } from 'react'
import { Filter, FilterList } from '@models/app.model'
import { FlatList, StyleProp, ViewStyle } from 'react-native'
import { Button } from 'react-native-magnus'

interface EventFilterProps {
	data: FilterList
	selectedFilter: Filter
	setSelectedFilter: Dispatch<SetStateAction<Filter>>
}

interface FilterProps {
	item: Filter
	selectedFilter: Filter
	handlePress: (item: Filter) => void
}

const EventFilters = (props: EventFilterProps) => {
	const { data, selectedFilter, setSelectedFilter } = props

	const handlePress = (item: Filter) => {
		setSelectedFilter(item)
	}

	return (
		<FlatList
			keyExtractor={i => i}
			contentContainerStyle={{ marginTop: 8, marginHorizontal: 25 }}
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			renderItem={({ item }) => <FilterButton {...{ item, selectedFilter, handlePress }} />}
		/>
	)
}

export default EventFilters

const FilterButton = ({ item, selectedFilter, handlePress }: FilterProps) => {
	const isSelected = selectedFilter === item
	return (
		<Button
			mr='sm'
			color={isSelected ? 'blue400' : 'white'}
			bg={isSelected ? 'white' : 'blue500'}
			shadow={isSelected ? 'lg' : undefined}
			onPress={() => handlePress(item)}
			my='lg'
		>
			{item}
		</Button>
	)
}
