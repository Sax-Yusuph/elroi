import React from 'react'
import { FocusAwareStatusBar } from '@elements'
import { useHeaderHeight } from '@react-navigation/stack'
import { EventData } from '@types'
import { useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Button, Div, Icon, ScrollDiv, StatusBar, Text, useTheme } from 'react-native-magnus'
import { iconFontFamilyType } from 'react-native-magnus/lib/typescript/src/ui/icon/icon.type'

type ViewEvent = (id: string) => void

interface Props {
	registerEvent: () => void
	event: EventData | null
}

export default ({ registerEvent, event }: Props) => {
	const headerHeight = useHeaderHeight()
	const { width } = useWindowDimensions()

	const IMAGE_WIDTH = 150

	return (
		<ScrollDiv>
			<Div bg='gray100' justifyContent='center' alignItems='center' mx='md'>
				<FocusAwareStatusBar />

				<Div my='2xl' w={IMAGE_WIDTH} h={IMAGE_WIDTH} rounded='lg' overflow='hidden' bg='red600'>
					{event?.image && (
						<FastImage
							source={event.image}
							style={{ width: IMAGE_WIDTH, aspectRatio: 1 }}
							resizeMode='cover'
						/>
					)}
				</Div>

				<Div bg='white' p='lg' alignItems='center' justifyContent='center' rounded='lg'>
					<Text fontSize='xl' fontWeight='bold' textAlign='center' my='lg'>
						{event?.title}
					</Text>

					<Text fontSize='lg' textAlign='center' color='gray500'>
						{event?.subTitle}
					</Text>

					<Div row alignItems='center' justifyContent='center' maxW={280} pr={-10}>
						<Info1 icon='calendar' text='12/04/2021' pack='Feather' />
						<Info1 icon='map-pin' text={event?.venue} pack='Feather' />
					</Div>

					{/* <Div row alignItems="center" justifyContent="center" maxW={280} pr={-10} >
					<Button  />
					<Button/>
					<Button  />
					<Button />
				
				    </Div> */}

					<Text fontSize='lg' color='gray600' textAlign='justify'>
						{event?.description}
					</Text>

					<Button my='xl' onPress={registerEvent} block>
						Register
					</Button>
				</Div>
				<Div h={50} bg='white' />
			</Div>
		</ScrollDiv>
	)
}

interface InfoProps {
	icon: string
	text: string | undefined
	pack?: iconFontFamilyType
}

interface InfoProps2 {
	stats: number
	label: string
}

const Info1 = ({ icon, text, pack }: InfoProps) => (
	<Div row alignItems='center' justifyContent='center' mr='xl' mb='lg' mt='sm'>
		<Icon name={icon} mr='md' fontSize='xl' fontFamily={pack} />
		<Text fontSize='md'>{text}</Text>
	</Div>
)

/**<Div row my={32} flex={1} alignItems='center' justifyContent='space-around'>
				<Icon
					name='map-pin'
					fontFamily='Feather'
					fontSize={32}
					color='white'
					bg='blue500'
					h={60}
					w={60}
					rounded='md'
				/>
				<Icon
					name='location-pin'
					fontFamily='MaterialIcons'
					fontSize={32}
					color='black'
					bg='yellow500'
					h={60}
					w={60}
					rounded='md'
				/>
				<Icon
					name='location-outline'
					fontFamily='Ionicons'
					fontSize={32}
					color='white'
					bg='blue500'
					h={60}
					w={60}
					rounded='md'
				/>
				<Icon
					name='location'
					fontFamily='Octicons'
					fontSize={32}
					color='black'
					bg='red500'
					h={60}
					w={60}
					rounded='md'
				/>
			</Div> */
