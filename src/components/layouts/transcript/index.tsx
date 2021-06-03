import React from 'react'
import { ITranscript } from '@types'
import { Div, ScrollDiv, Button, Text, Header, Icon } from 'react-native-magnus'
import EventStatus from '@layouts/streamer/extra/status'

interface Props {
	goBack: () => void
	transcriptData: ITranscript
}

const Transcript = ({ goBack, transcriptData }: Props) => {
	const { status, transcript, eventTitle, views } = transcriptData
	return (
		<Div>
			<EventStatus {...{ status, eventTitle, views }} />
			<ScrollDiv p='lg'>
				<Header
					p='lg'
					borderBottomWidth={1}
					borderBottomColor='gray200'
					alignment='center'
					prefix={
						<Button bg='transparent' onPress={goBack}>
							<Icon name='arrow-left' fontFamily='Feather' fontSize='2xl' />
						</Button>
					}
				>
					Transcript
				</Header>

				<Text fontSize='md' color='white' textAlign='justify'>
					{transcript}
				</Text>
			</ScrollDiv>
		</Div>
	)
}

export default Transcript
