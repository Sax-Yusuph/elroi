import { ReviewEventProps } from '@types'
import { BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Text, Icon, Div, Button, Input } from 'react-native-magnus'
import React, { useState } from 'react'
import { AirbnbRating } from 'react-native-ratings'
import { IconButton } from '@elements'

const ReviewEvent = ({ onFinishRating, onFinishReview }: ReviewEventProps) => {
	const [reviewText, setReviewText] = useState('')
	const [textInput, showTextInput] = useState(false)
	const { dismiss } = useBottomSheetModal()

	const ratingHandler = (rating: number) => {
		onFinishRating(rating, () => {
			showTextInput(true)
		})
	}

	return (
		<Div>
			<Div borderBottomColor='screenBg' borderBottomWidth={1} px='xl' pb='lg'>
				<Text fontWeight='bold' fontSize='lg'>
					Review this Event
				</Text>
			</Div>

			<BottomSheetView
				style={{
					alignItems: 'center',
					height: '80%',
				}}
			>
				<IconButton position='absolute' zIndex={99999} top={100} onPress={console.log}>
					<Icon name='close' fontSize={20} />
				</IconButton>

				<Text fontSize='md' textAlign='center' m='lg'>
					What do you think about this event?
				</Text>

				<AirbnbRating
					count={5}
					reviews={['Terrible', 'Bad', 'Good', 'Very Good', 'Amazing']}
					defaultRating={0}
					size={20}
					onFinishRating={ratingHandler}
					showRating={false}
				/>

				{textInput && (
					<>
						<Input
							multiline={true}
							minH={120}
							placeholder='Your thought...'
							value={reviewText}
							onChangeText={setReviewText}
							mx='xl'
						/>

						<Button mx='lg'>Done</Button>
					</>
				)}
			</BottomSheetView>
		</Div>
	)
}

export default ReviewEvent
