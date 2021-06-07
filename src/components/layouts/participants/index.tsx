import { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet'
import { data as ParticipantsData } from './data'
import { Text } from 'react-native-magnus'
import React, { useMemo } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useFocusEffect } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconButton, ParticipantItem } from '@elements'
import { ModalAction, Participant, ShowModal } from '@types'

interface Props {
	style?: ViewStyle
	onItemPress?: () => void
	showModal: ShowModal
}

const Participants = ({ style, showModal }: Props) => {
	// hooks
	const { bottom: bottomSafeArea } = useSafeAreaInsets()

	// styles
	const contentContainerStyle = useMemo<ViewStyle>(
		() => ({
			...styles.contentContainer,
			...style,
			paddingBottom: bottomSafeArea,
		}),
		[style, bottomSafeArea]
	)

	return (
		<View style={{ flex: 1 }}>
			<BottomSheetView style={styles.header}>
				{renderHeader(ParticipantsData, showModal)}
			</BottomSheetView>

			<BottomSheetFlatList
				// ListHeaderComponent={renderHeader}
				style={styles.container}
				contentContainerStyle={contentContainerStyle}
				data={ParticipantsData}
				initialNumToRender={5}
				windowSize={10}
				maxToRenderPerBatch={5}
				keyExtractor={i => i.name}
				focusHook={useFocusEffect}
				renderItem={({ item }) => <ParticipantItem {...{ item }} />}
			/>
		</View>
	)
}

export default Participants

const renderHeader = (ParticipantsData: Participant[], showModal: ShowModal) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
		}}
	>
		<Text fontSize='lg' style={styles.heading}>
			Participants ({ParticipantsData.length})
		</Text>

		<IconButton onPress={() => showModal({ type: 'particpants', close: true })}>
			<Icon name='close' size={24} color='grey' />
		</IconButton>
	</View>
)

const styles = StyleSheet.create({
	container: {
		overflow: 'visible',
		flex: 1,
		// justifyContent: 'center',
		// backgroundColor: 'white',
		// marginTop: 40,
	},
	heading: {
		fontWeight: 'bold',
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
	contentContainer: {
		// paddingHorizontal: 24,
		overflow: 'visible',
	},
})
