import React, { useMemo, useState } from 'react'
import { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet'
import { ReportHostData as ReportData } from '@models'
import { Button, Text, Icon, Div } from 'react-native-magnus'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ModalAction, ReportItemType } from '@types'
import { ReportItem, IconButton } from '@elements'

export type ShowModal = ({ type, close }: ModalAction) => void
interface Props {
	style?: ViewStyle
	onItemPress?: () => void
	showModal: ShowModal
}

const ReportHost = ({ style, showModal }: Props) => {
	// hooks
	const { bottom: bottomSafeArea } = useSafeAreaInsets()

	const [selectedItems, onSelectItem] = useState<ReportItemType[]>([])

	// styles
	const contentContainerStyle = useMemo<ViewStyle>(
		() => ({
			...styles.contentContainer,
			...style,
			paddingBottom: bottomSafeArea,
		}),
		[style, bottomSafeArea]
	)

	const renderFooter = useMemo(() => (selectedItems.length ? <Button m='xl'>Done</Button> : null), [
		selectedItems,
	])

	return (
		<View style={{ flex: 1 }}>
			<BottomSheetView style={styles.header}>
				{useMemo(() => renderHeader(showModal), [])}
			</BottomSheetView>

			<BottomSheetFlatList
				ListHeaderComponent={
					<Text mx='lg' color='gray500' my='lg'>
						What do you wish to report about? Tick as many that applies
					</Text>
				}
				ListFooterComponent={renderFooter}
				style={styles.container}
				contentContainerStyle={contentContainerStyle}
				data={ReportData}
				initialNumToRender={5}
				windowSize={10}
				maxToRenderPerBatch={5}
				keyExtractor={i => i}
				focusHook={useFocusEffect}
				renderItem={({ item }) => <ReportItem {...{ item, onSelectItem }} />}
			/>
		</View>
	)
}

export default ReportHost

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

const renderHeader = (showModal: ShowModal) => (
	<Div row justifyContent='space-between' w='100%'>
		<Text fontSize='lg'>Report this host</Text>

		<IconButton
			onPress={() => {
				showModal({ type: 'report', close: true })
			}}
		>
			<Icon name='close' fontSize='xl' color='grey' />
		</IconButton>
	</Div>
)
