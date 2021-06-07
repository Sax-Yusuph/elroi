import React from 'react'
import { ITranscript } from '@types'
import { Div, ScrollDiv, Button, Text, Header, Icon } from 'react-native-magnus'
import EventStatus from '@layouts/streamer/extra/status'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FocusAwareStatusBar, IconButton } from '@elements'
import { Pressable } from 'react-native'

interface Props {
	goBack: () => void
	transcriptData: ITranscript | null
}

const Transcript = ({ goBack, transcriptData }: Props) => {
	const { status, transcript, eventTitle, views } = transcriptData || {}

	const { top, bottom } = useSafeAreaInsets()
	return (
		<Div bg='blue900' pt={top} pb={bottom}>
			<FocusAwareStatusBar backgroundColor='blue900' barStyle='light-content' />
			{eventTitle && status && views ? <EventStatus {...{ status, eventTitle, views }} /> : null}

			<Header
				p='lg'
				borderBottomWidth={1}
				borderBottomColor='gray200'
				alignment='left'
				prefix={
					<IconButton onPress={goBack}>
						<Icon name='arrow-left' fontFamily='Feather' fontSize={28} color='blue900' />
					</IconButton>
				}
			>
				Transcript
			</Header>
			<ScrollDiv p='xl'>
				<Text fontSize='xl' color='white' textAlign='justify' lineHeight={34}>
					{transcript}
				</Text>
				<Div h={200} />
			</ScrollDiv>
		</Div>
	)
}

export default Transcript
