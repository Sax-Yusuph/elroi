import { Checkbox, Div, Text } from 'react-native-magnus'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ReportItemType } from '@types'
import { FlatList } from 'react-native'

type ItemProps = {
	item: ReportItemType
	onSelectItem: Dispatch<SetStateAction<ReportItemType[]>>
}

const ReportItem = ({ item, onSelectItem }: ItemProps) => {
	const [checked, setChecked] = useState(false)

	const renderCheckbox = (props: any) => (
		<Checkbox {...props} checked={checked} onChange={toggleChecked} />
	)

	const toggleChecked = (newChecked: boolean) => {
		if (newChecked) {
			onSelectItem(prev => [...new Set([...prev, item])])
		} else {
			// pop off the item from the stack
			onSelectItem(prev => prev.filter(prevItem => prevItem !== item))
		}
		setChecked(newChecked)
	}

	return (
		<Div px='lg' py='lg'>
			<Checkbox
				value={item}
				suffix={
					<Text flex={1} pl='lg'>
						{item}
					</Text>
				}
				checked={checked}
				onChange={toggleChecked}
			/>
		</Div>
	)
}

export default ReportItem
