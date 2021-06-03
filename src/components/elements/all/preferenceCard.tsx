import React, { Dispatch, SetStateAction, useState } from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { Interests, UserInterest } from '@models/app.model'
import { Div, Text, Checkbox } from 'react-native-magnus'
import TouchableScale from 'react-native-touchable-scale'

interface CardProps {
	item: UserInterest
	onSelectItem: Dispatch<SetStateAction<Interests[]>>
}

const PreferencesCardItem = ({ item, onSelectItem }: CardProps) => {
	const [checked, setChecked] = useState(false)
	const { width } = useWindowDimensions()
	const toggleChecked = () => {
		// console.log(nextChecked);
		if (checked) {
			// pop off the item from the stack
			onSelectItem(prev => prev.filter(prevItem => prevItem !== item.title))
		} else {
			onSelectItem(prev => [...new Set([...prev, item.title])])
		}
		setChecked(prev => !prev)
	}

	const WIDTH = width / 3 - 15

	return (
		<TouchableScale
			onPress={toggleChecked}
			activeScale={0.9} //0.9
			tension={200} //150
			friction={10} //3
		>
			<Div
				m='sm'
				w={WIDTH}
				h={WIDTH}
				rounded='lg'
				justifyContent='center'
				alignItems='center'
				borderColor='gray400'
				borderWidth={1}
			>
				<Checkbox
					checked={checked}
					value={item.title}
					position='absolute'
					top={3}
					left={3}
					onChange={toggleChecked}
				/>
				<item.icon width={40} height={40} style={styles.icon} />
				<Text fontSize='md'>{item.title}</Text>
			</Div>
		</TouchableScale>
	)
}

export default PreferencesCardItem

const styles = StyleSheet.create({
	interestCard: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		aspectRatio: 1.0,
		margin: 5,
		// maxWidth: Dimensions.get('window').width / 3 - 24,
	},
	checkbox: {
		position: 'absolute',
		left: 0,
		top: -5,
	},
	interestlabel: {
		textAlign: 'center',
		position: 'absolute',
		bottom: 0,
		left: -5,
		minWidth: 100,
		flex: 1,
	},
	icon: {
		marginBottom: 5,
	},
})
