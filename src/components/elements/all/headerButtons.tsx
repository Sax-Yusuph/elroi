import React, { memo } from 'react'
import {
	HeaderButtons,
	HeaderButton,
	Item,
	HiddenItem,
	OverflowMenu,
} from 'react-navigation-header-buttons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-magnus'
import { HomeScreenProp } from 'navigation/types'

const IoniconsHeaderButton = (props: any) => (
	// the `props` here come from <Item ... />
	// you may access them and pass something else to `HeaderButton` if you like
	<HeaderButton IconComponent={FeatherIcons} iconSize={23} {...props} />
)

type Props = { onPress: () => void }
const ReusableHiddenItem = memo(({ onPress }: Props) => (
	<HiddenItem title='hidden2' onPress={onPress} />
))

export const HeaderLeft = memo(({ navigation }: HomeScreenProp) => {
	return (
		<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
			<Item title='search' iconName='user' onPress={() => console.log('search')} />
		</HeaderButtons>
	)
})

export const HeaderRight = memo(({ navigation }: HomeScreenProp) => {
	const viewNotifications = () => {
		navigation.navigate('Notifications')
	}

	return (
		<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
			<Item title='search' iconName='bell' onPress={viewNotifications} />
			<OverflowMenu
				style={{ marginHorizontal: 10 }}
				OverflowIcon={({ color }) => (
					<Icon name='people-circle' fontFamily='Ionicons' fontSize={25} color={color} />
				)}
			>
				<HiddenItem title='hidden1' onPress={() => console.log('hidden1')} />
				<ReusableHiddenItem onPress={() => console.log('hidden2')} />
			</OverflowMenu>
		</HeaderButtons>
	)
})
