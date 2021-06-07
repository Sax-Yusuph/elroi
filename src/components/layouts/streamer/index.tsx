import React, { useMemo } from 'react'
import MockData from './extra/data'
import { FlatList } from 'react-native'
import ListHeader from './extra/header'
import { Div } from 'react-native-magnus'
import EventStatus from './extra/status'
import { IStreamEvent } from '@types'
import FooterMenu from './extra/footer'
import { FocusAwareStatusBar, Player, EventAccordion } from '@elements'
import { PlayerProps } from 'components/elements/all/Player'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

interface Props extends PlayerProps {
	data: IStreamEvent[] | null
	leaveEvent: () => void
}

export default (props: Props) => {
	const { data, leaveEvent, ...rest } = props
	// const renderheader = useMemo(() => <ListHeader {...rest}  />, [])

	const { top } = useSafeAreaInsets()

	return (
		<BottomSheetModalProvider>
			<Div pt={top} flex={1} bg='gray100'>
				<FocusAwareStatusBar />
				<EventStatus
					eventTitle="The Beleiver's book wednesday meetings"
					views={3000}
					status='Live'
				/>
				<Player {...rest} />

				<FlatList
					data={MockData}
					keyExtractor={(_, i) => i.toString()}
					// ListHeaderComponent={renderheader}
					ListFooterComponent={<Div h={100} />}
					renderItem={({ item }) => <EventAccordion {...item} />}
				/>

				<FooterMenu {...{ leaveEvent }} />
			</Div>
		</BottomSheetModalProvider>
	)
}
