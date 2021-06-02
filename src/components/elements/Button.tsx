import React, { ReactNode } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
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
	return (
		<TouchableScale
			onPress={props.onPress}
			activeScale={0.95} //0.9
			tension={200} //150
			friction={10} //3
		>
			<Div {...props}>{props.children}</Div>
		</TouchableScale>
	)
}

export const AnimatedTextButton = (props: Props2) => {
	return (
		<TouchableScale
			// style={style}
			onPress={props.onPress}
			activeScale={0.9} //0.9
			tension={200} //150
			friction={10} //3
		>
			<Text {...props}>{props.children}</Text>
		</TouchableScale>
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
