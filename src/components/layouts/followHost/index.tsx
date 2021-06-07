import React from 'react'
import { BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Text, Icon, Div, Button } from 'react-native-magnus'
import { IconButton } from '@elements'
import { ModalAction } from '@types'

interface Props {
	showModal: ({ type, close }: ModalAction) => void
}
const FollowHost = (props: Props) => {
	const { dismiss } = useBottomSheetModal()
	return (
		<Div>
			<Div px='xl' pb='lg' zIndex={9999} borderBottomColor='screenBg' borderBottomWidth={1}>
				<Text fontWeight='bold' fontSize='lg'>
					Follow Host
				</Text>
			</Div>
			<BottomSheetView
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					height: '80%',
				}}
			>
				<IconButton position='absolute' zIndex={99999} top={100} onPress={console.log}>
					<Icon name='close' fontSize={20} fontFamily='Ionicons' />
				</IconButton>

				<Text fontSize='sm' textAlign='center' maxW='80%'>
					Do you wish to follow this host and receive notifications from this host?
				</Text>

				<Div row>
					<Button variant='brand-border'>Yes</Button>
					<Button variant='brand-border'>No</Button>
				</Div>
			</BottomSheetView>
		</Div>
	)
}

export default FollowHost
