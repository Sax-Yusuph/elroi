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

interface Props extends PlayerProps {
	data: IStreamEvent[] | null
	leaveEvent: () => void
}

export default (props: Props) => {
	const { data, leaveEvent, ...rest } = props
	// const renderheader = useMemo(() => <ListHeader {...rest}  />, [])

	const { top } = useSafeAreaInsets()

	return (
		<Div pt={top} flex={1} bg='gray100'>
			<FocusAwareStatusBar />
			<EventStatus eventTitle="The Beleiver's book wednesday meetings" views={3000} status='Live' />
			<Player {...rest} />

			<FlatList
				data={MockData}
				// ListHeaderComponent={renderheader}
				ListFooterComponent={<Div h={100} />}
				renderItem={({ item }) => <EventAccordion {...item} />}
			/>

			<FooterMenu {...{ leaveEvent }} />
		</Div>
	)
}
