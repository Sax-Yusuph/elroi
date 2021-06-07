import React, { Children, ReactNode } from 'react'
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { Div, DivProps, Text, TextProps } from 'react-native-magnus'
import TouchableScale from 'react-native-touchable-scale'

interface Props extends DivProps {
	children: ReactNode
	onPress?: () => void
}

interface Props2 extends TextProps {
	children: ReactNode
	onPress?: () => void
}

export const AnimatedPress = (props: Props) => {
	const { onPress, ...rest } = props
	return (
		<TouchableScale
			onPress={onPress}
			activeScale={0.95} //0.9
			tension={200} //150
			friction={10} //3
		>
			<Div {...rest}>{props.children}</Div>
		</TouchableScale>
	)
}

export const AnimatedTextButton = (props: Props2) => {
	const { onPress, ...rest } = props

	return (
		<TouchableScale
			onPress={onPress}
			activeScale={0.9} //0.9
			tension={200} //150
			friction={10} //3
		>
			<Text {...rest}>{props.children}</Text>
		</TouchableScale>
	)
}

interface IconButtonProps extends DivProps {
	onPress: (args?: any) => void
	children: ReactNode
}

export const IconButton = (props: IconButtonProps) => {
	const { onPress, children, ...rest } = props

	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => (
				<Div bg={pressed ? 'gray300' : 'transparent'} rounded='lg' p='lg' {...rest}>
					{children}
				</Div>
			)}
		</Pressable>
	)
}

// export const AnimatedButton = (props: Props2) => {
// 	return (
// 		<TouchableScale
// 			// style={style}
// 			onPress={props.onPress}
// 			activeScale={0.9} //0.9
// 			tension={200} //150
// 			friction={10} //3
// 		>
// 			<Text {...props}>{props.children}</Text>
// 		</TouchableScale>
// 	)
// }
