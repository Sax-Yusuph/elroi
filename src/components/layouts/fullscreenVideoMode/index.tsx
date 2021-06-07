import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useRef } from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
	Extrapolate,
	interpolate,
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated'
import { useVector, snapPoint } from 'react-native-redash'
import { SharedElement } from 'react-navigation-shared-element'
import Video, { OnLoadData, OnProgressData, VideoProperties } from 'react-native-video'

import { ScreenProps, StreamingRoutes } from '@types'
import { FullScreenVideoProps } from 'navigation/types'

const { height } = Dimensions.get('window')
const AnimatedVideo = Animated.createAnimatedComponent(Video)

export default ({ route, navigation }: FullScreenVideoProps) => {
	const isGestureActive = useSharedValue(false)
	const translation = useVector()
	//@ts-ignore
	const { video } = route.params

	const onGestureEvent = useAnimatedGestureHandler({
		onStart: () => (isGestureActive.value = true),
		onActive: ({ translationX, translationY }) => {
			translation.x.value = translationX
			translation.y.value = translationY
		},
		onEnd: ({ translationY, velocityY }) => {
			const snapBack = snapPoint(translationY, velocityY, [0, height]) === height
			if (snapBack) {
				runOnJS(navigation.goBack)()
			} else {
				isGestureActive.value = false
				translation.x.value = withSpring(0)
				translation.y.value = withSpring(0)
			}
		},
	})

	const videoRef = useRef<React.Component<Animated.AnimateProps<VideoProperties>, any, any> | null>(
		null
	)

	const style = useAnimatedStyle(() => {
		const scale = interpolate(translation.y.value, [0, height], [1, 0.5], Extrapolate.CLAMP)
		return {
			flex: 1,
			transform: [
				{ translateX: translation.x.value * scale },
				{ translateY: translation.y.value * scale },
				{ scale },
			],
		}
	})

	const borderStyle = useAnimatedStyle(() => {
		return {
			borderRadius: withTiming(isGestureActive.value ? 24 : 0),
		}
	})

	StatusBar.setBackgroundColor('black')
	StatusBar.setBarStyle('light-content')

	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<Animated.View style={style}>
				<SharedElement id={video.id} style={{ flex: 1 }}>
					{!video?.video && video?.imageSource ? (
						<Animated.Image
							source={video.imageSource}
							style={[
								{
									...StyleSheet.absoluteFillObject,
									width: undefined,
									height: undefined,
									resizeMode: 'cover',
								},
								borderStyle,
							]}
						/>
					) : (
						<AnimatedVideo
							resizeMode='cover'
							repeat
							poster='paused'
							audioOnly={false}
							fullscreen={false}
							fullscreenOrientation='landscape'
							playInBackground={false}
							// paused={videoState.paused}
							// {...{onLoad, onProgress, onEnd}}
							ref={ref => (videoRef.current = ref)}
							source={video.video}
							rate={1.0}
							style={[StyleSheet.absoluteFill, borderStyle]}
						/>
					)}
				</SharedElement>
			</Animated.View>
		</PanGestureHandler>
	)
}
