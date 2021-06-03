import { Filter, FilterList } from '@models'
import React, { Dispatch, SetStateAction } from 'react'
import { FlatList, StyleProp, useWindowDimensions, ViewStyle } from 'react-native'
import { Button, Div } from 'react-native-magnus'

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

	const { width } = useWindowDimensions()
	const INTERVAL = width + 50

	const dataLength = data.length

	return (
		<FlatList
			snapToInterval={INTERVAL}
			decelerationRate='fast'
			showsHorizontalScrollIndicator={false}
			scrollEventThrottle={0}
			keyExtractor={i => i}
			contentContainerStyle={{ marginTop: 8, marginHorizontal: 25 }}
			horizontal
			data={data}
			renderItem={({ item }) => <FilterButton {...{ item, selectedFilter, handlePress }} />}
			ListFooterComponent={<Div w={50} />}
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
