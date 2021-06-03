import * as React from 'react'
import { StatusBar } from 'react-native-magnus'
import { useIsFocused } from '@react-navigation/native'
import { VariantPropsType } from 'react-native-magnus/lib/typescript/src/types'
import { StatusBarProps } from 'react-native'

type Props = StatusBarProps & VariantPropsType

const FocusAwareStatusBar = (props: Props) => {
	const isFocused = useIsFocused()

	return isFocused ? (
		<StatusBar backgroundColor='gray100' animated hidden={false} {...props} />
	) : null
}

export default FocusAwareStatusBar
