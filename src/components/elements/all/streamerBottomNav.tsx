import { SBottomNavProps } from '@types'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Div } from 'react-native-magnus'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MenuButton from './MenuButton'
import OverFlowMenu from './overFlowMenu'

const BottomNav = (props: SBottomNavProps) => {
	const { showModal, handleMenuPress, muted, audioActive, liked } = props

	const renderColor = (cond: boolean) => {
		if (cond) return 'red500'

		return 'gray500'
	}
	const { bottom } = useSafeAreaInsets()

	const { width } = useWindowDimensions()

	return (
		<Div h={55} pb={bottom} row alignItems='center' justifyContent='space-evenly' w={width}>
			<MenuButton
				onPress={() => handleMenuPress({ type: 'mic' })}
				text={muted ? 'Unmute' : 'Mute'}
				color={renderColor(muted)}
				cond={muted}
				icon={muted ? 'mic-off' : 'mic'}
			/>
			<MenuButton
				onPress={() => handleMenuPress({ type: 'audio' })}
				text={muted ? 'Unmute' : 'Mute'}
				color={renderColor(audioActive)}
				cond={audioActive}
				icon='headset'
			/>

			<MenuButton
				onPress={() => handleMenuPress({ type: 'like' })}
				text='Like'
				color={liked ? 'red500' : 'black'}
				cond={liked}
				icon='heart'
			/>

			<MenuButton
				onPress={() => handleMenuPress({ type: 'exit' })}
				text='Leave'
				color='red'
				icon='md-exit'
				cond
			/>

			<OverFlowMenu {...{ showModal, renderColor }} />
		</Div>
	)
}

export default BottomNav
