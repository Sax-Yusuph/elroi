import { AnimatedButton, AnimatedTextButton } from '@elements/Button'
import Dot from '@elements/Dot'
import Slide from '@elements/Slide'
import React, { useRef, useState } from 'react'
import {
	ScrollView,
	Platform,
	useWindowDimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
} from 'react-native'
import { Button, Div, Text } from 'react-native-magnus'
import Data from './data'

// range added because of inconsistensies on Android
const RANGE = 5

interface Props {
	onOnboardingDone: () => void
	joinEvent: () => void
	signUp: () => void
}

export default ({ onOnboardingDone, joinEvent, signUp }: Props) => {
	const [slideNo, setSlideNo] = useState(0)

	const ref = useRef<ScrollView>(null)
	const { width } = useWindowDimensions()

	const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offset = Math.round(e.nativeEvent.contentOffset.x)
		const roundedWidth = Math.round(width)
		const index = Math.round(offset / roundedWidth)
		const remainder = Math.round(offset % roundedWidth)

		if (
			remainder < roundedWidth * (index - 1) - RANGE &&
			remainder > roundedWidth * index + RANGE
		) {
			return
		}
		setSlideNo(offset < width ? 0 : index)
	}

	const onSkipSlide = () => {
		console.log(slideNo)
		ref.current?.scrollTo({ x: width * (slideNo + 1), animated: true })
	}

	const Indicator = () => (
		<Div
			row
			mb={Platform.select({
				ios: 'xs',
				android: 'lg',
			})}
		>
			{[...new Array(Data.length)].map((_, index) => (
				<Dot key={`dot_${index}`} selected={index === slideNo} />
			))}
		</Div>
	)

	return (
		<Div flex={1} alignItems='center' bg='white'>
			<Div flex={2}>
				<ScrollView
					horizontal
					snapToInterval={width}
					decelerationRate='fast'
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={0}
					onScrollAnimationEnd={() => setSlideNo(1)}
					{...{ onScroll, ref }}
				>
					{Data.map((slideItem, index) => (
						<Slide
							title={slideItem.title}
							subtitle={slideItem.subtitle}
							image={slideItem.image}
							isFinal={slideItem.isFinal}
							onPress={slideItem.isFinal ? onOnboardingDone : undefined}
							onSkip={onSkipSlide}
							key={slideItem.title + index}
							{...{ Indicator, index }}
						/>
					))}
				</ScrollView>
			</Div>

			<Div flex={1}>
				<Div
					justifyContent='center'
					row
					mb={Platform.select({
						ios: 'xs',
						android: 'lg',
					})}
				>
					{[...new Array(Data.length)].map((_, index) => (
						<Dot key={`dot_${index}`} selected={index === slideNo} />
					))}
				</Div>

				{slideNo !== 4 && (
					<AnimatedTextButton
						onPress={onSkipSlide}
						fontSize='lg'
						textAlign='center'
						fontWeight='700'
						mb='md'
						color='blue600'
					>
						Skip
					</AnimatedTextButton>
				)}

				{slideNo === 4 && (
					<Div>
						<Div my='xl' row justifyContent='center'>
							<Button mx='lg' variant='brand' onPress={joinEvent}>
								Join Event
							</Button>
							<Button mx='lg' variant='brand-border' onPress={signUp}>
								Create Event
							</Button>
						</Div>

						<Text>
							Dont' have an account? <Text color='blue600'>Sign up</Text>
						</Text>
					</Div>
				)}
			</Div>
		</Div>
	)
}
