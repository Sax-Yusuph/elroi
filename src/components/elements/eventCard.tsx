import React from 'react'
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
	useWindowDimensions,
	StyleProp,
	ViewStyle,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { EventData } from '@types'
import { AnimatedPress } from '@elements/Button'
import { Div, Text } from 'react-native-magnus'
import FastImage from 'react-native-fast-image'
const { width, height } = Dimensions.get('window')

interface EventCardProps {
	item: EventData
	viewEvent: (id: string) => void
}

const EventCard = ({ item, viewEvent }: EventCardProps) => {
	const { width } = useWindowDimensions()
	const isPortraitMode = width < 500

	const ASPECT_RATIO = isPortraitMode ? width / 3.6 : width / 6
	// left: isPortraitMode ? -65 : -90,
	// top: isPortraitMode ? 20 : 7,

	const innerCardStyles: StyleProp<ViewStyle> = {
		paddingLeft: isPortraitMode ? 45 : 40,
		// paddingRight:isPortraitMode ? 10,
	}

	const seeEvent = () => {
		viewEvent(item.id)
	}

	return (
		<AnimatedPress
			onPress={seeEvent}
			row
			justifyContent='center'
			alignItems='center'
			mx='xl'
			mt='lg'
		>
			<Div rounded='sm' w={ASPECT_RATIO} h={ASPECT_RATIO} mr={-24} shadow='xl'>
				<FastImage source={item.image} style={styles.image} />
			</Div>

			<Div shadow='md' bg='white' rounded='lg' p='lg' pl='2xl' zIndex={0}>
				<Text fontWeight='bold' fontSize='md' numberOfLines={1}>
					{item.title.toUpperCase()}
				</Text>

				<Text fontSize='lg' adjustsFontSizeToFit numberOfLines={1} my='sm'>
					{item.subTitle}
				</Text>

				<Div row alignItems='center' justifyContent='center' maxW={280} pr='lg'>
					<Info1 icon='calendar' text='12/04/2021' />
					<Info1 icon='map-pin' text={item.venue} pack='feather' />
				</Div>

				<Div row alignItems='center' justifyContent='space-between' maxW={280} pr='md'>
					<StatsItem stats={item.view} label='Views' />
					<StatsItem stats={item.likes} label='Likes' />
					<StatsItem stats={item.comments} label='Comments' />
					<StatsItem stats={item.interests} label='Interests' />
				</Div>
			</Div>
		</AnimatedPress>
	)
}

export default EventCard

interface InfoProps {
	icon: string
	text: string
	pack?: string
}
interface InfoProps2 {
	stats: number
	label: string
}

const Info1 = ({ icon, text, pack }: InfoProps) => (
	<Div row mr='xl' mb='lg' mt='md'>
		<Icon name={icon} style={{ marginRight: 5 }} size={14} color='#8F9BB3' />
		<Text fontSize='xs'>{text}</Text>
	</Div>
)
const StatsItem = ({ stats, label }: InfoProps2) => (
	<Div justifyContent='center' alignItems='center' mr='lg'>
		<Text fontSize='xs'>{stats}</Text>
		<Text fontSize='xs' color='gray'>
			{label}
		</Text>
	</Div>
)

const styles = StyleSheet.create({
	icon: {},

	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 7,
		// marginRight: -20,
		// zIndex: 20,
	},
})
