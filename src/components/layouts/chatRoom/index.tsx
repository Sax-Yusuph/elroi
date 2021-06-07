import { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet'
import { IMessage, ModalTypes, ShowModal } from '@types'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Div, Icon, Text } from 'react-native-magnus'
import { IconButton } from '@elements'

interface Props {
	showModal: ShowModal
}

const ChatRoom = ({ showModal }: Props) => {
	const [messages, setMessages] = useState<IMessage[] | []>([])
	const insets = useSafeAreaInsets()
	useEffect(() => {
		// setMessages(MockData);
		setMessages([
			{
				_id: 1,
				text: 'Hello developer!!!',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://placeimg.com/140/140/any',
				},
			},
		])
	}, [])

	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
	}, [])

	return (
		<Div flex={1}>
			<BottomSheetView style={styles.header}>{renderHeader({ showModal })}</BottomSheetView>

			<BottomSheetFlatList
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
				initialNumToRender={5}
				windowSize={10}
				maxToRenderPerBatch={5}
				data={[]}
				renderItem={null}
				contentInset={insets}
				ListEmptyComponent={useMemo(
					() => (
						<GiftedChat
							// timeTextStyle={{ fontFamily: 'Inter-Medium' }}
							messages={messages}
							onSend={(messages: IMessage[]) => onSend(messages)}
							user={{
								_id: 1,
							}}
						/>
					),
					[messages]
				)}
			/>
		</Div>
	)
}

export default ChatRoom

const styles = StyleSheet.create({
	container: {
		overflow: 'visible',
		flex: 1,
		// justifyContent: 'center',
		// backgroundColor: 'white',
		// marginTop: 40,
	},
	contentContainer: {
		flex: 1,
		overflow: 'visible',
	},
	header: {
		paddingBottom: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		zIndex: 99999,
		elevation: 2,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	heading: {
		fontWeight: 'bold',
	},
})

const renderHeader = ({ showModal }: Props) => (
	<Div row justifyContent='space-between' w='100%'>
		<Text fontSize='lg' fontWeight='bold'>
			Chat room
		</Text>

		<IconButton onPress={() => showModal({ type: 'chats', close: true })}>
			<Icon name='close' fontSize={24} fontFamily='Ionicons' color='grey' />
		</IconButton>
	</Div>
)
