import React, { useEffect, useRef, useState } from 'react'
import { Pressable, useWindowDimensions } from 'react-native'
import Video, { LoadError, OnBufferData, OnLoadData, OnProgressData } from 'react-native-video'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LottieView from 'lottie-react-native'
import { ProgressView } from '@react-native-community/progress-view'
import VoiceNote from '@assets/img/svgs/voiceNote.svg'
import { SharedElement } from 'react-navigation-shared-element'
import { useIsFocused } from '@react-navigation/native'
import { Div, Text, Icon } from 'react-native-magnus'
import { VideoItem } from '@models'
import Animated from 'react-native-reanimated'

// import Animated, { block } from 'react-native-reanimated'

export interface PlayerProps {
	onPress?: () => void
	viewTranscript: () => void
	openFullScreenMode: (id: string) => void
	onProgressChange: (a: number) => void
	video: VideoItem | null
}

interface VideoState {
	paused: boolean
	progress: number
	duration: number
}

const initialState = {
	paused: false,
	progress: 0,
	duration: 0,
}

export const Player = (props: PlayerProps) => {
	const { viewTranscript, onProgressChange, video, openFullScreenMode } = props
	const [opacity, setOpacity] = React.useState(1)
	const { width } = useWindowDimensions()
	const height = width * 0.5625
	const [videoState, setVideoState] = useState<VideoState>(initialState)

	let loadingAnimation = useRef<LottieView | null>(null).current

	const [bufferring, setBufferring] = useState(true)

	const videoRef = useRef<Video | null>(null)

	const isFocused = useIsFocused()

	useEffect(() => {
		if (isFocused) {
			setOpacity(1)
		}
	}, [isFocused])

	useEffect(() => {
		if (onProgressChange) {
			onProgressChange(videoState.progress)
		}
	}, [videoState.progress])

	const onLoad = (meta: OnLoadData) => {
		setVideoState(prev => ({
			...prev,
			duration: meta.duration,
		}))
	}

	const onProgress = (progress: OnProgressData) => {
		setVideoState(prev => ({
			...prev,
			progress: progress.currentTime / videoState.duration,
		}))
	}

	const onEnd = () => {
		setVideoState(prev => ({
			...prev,
			paused: true,
		}))
	}

	const onLoadStart = () => {
		loadingAnimation?.play()
	}

	const onBuffer = (meta: OnBufferData) => {
		if (meta.isBuffering) {
			loadingAnimation?.play()
		} else {
			loadingAnimation?.pause()
		}

		console.log({ b: meta.isBuffering })
		setBufferring(meta.isBuffering)
	}

	const onError = (err: LoadError) => {}
	return (
		<Div bg='blue800' m='lg' p='xl' rounded='lg' h={height * 1.7}>
			<Pressable
				style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
				onPress={() => {
					setOpacity(0)
					video && openFullScreenMode(video.id)
				}}
			>
				{video ? (
					<SharedElement id={video.id}>
						<Animatable.View
							transition='opacity'
							style={{
								opacity,
								height,
								backgroundColor: bufferring ? 'black' : undefined,
								borderRadius: 10,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Video
								source={video?.video}
								resizeMode='cover'
								style={{ width: '100%', borderRadius: 10, height }}
								repeat
								poster='paused'
								audioOnly={false}
								fullscreen={false}
								fullscreenOrientation='landscape'
								playInBackground={false}
								paused={videoState.paused}
								{...{ onLoad, onProgress, onEnd, onLoadStart, onBuffer, onError }}
								ref={ref => (videoRef.current = ref)}

								// pictureInPicture={true}
							/>

							{!bufferring && (
								<LottieView
									source={require('@assets/lottie/loading.json')}
									ref={ref => (loadingAnimation = ref)}
									style={{ width: 200, height: 200, position: 'absolute' }}
									// progress={bufferProgressAnimation}
								/>
							)}
						</Animatable.View>
					</SharedElement>
				) : (
					<EmptyVideo {...{ opacity, height }} />
				)}
			</Pressable>

			<Div mt='lg' overflow='hidden' justifyContent='space-evenly' alignItems='center'>
				<ProgressView
					progressTintColor='orange'
					trackTintColor='white'
					progress={videoState.progress}
					style={{ width: '100%' }}
				/>

				<Div row justifyContent='space-between' w='100%'>
					<Text fontSize='sm' color='white'>
						0.00
					</Text>
					<Text fontSize='sm' color='white'>
						{videoState.duration}
					</Text>
				</Div>
			</Div>

			<Div maxW={300} overflow='hidden'>
				<VoiceNote />
			</Div>

			<Div position='absolute' w='100%' row justifyContent='space-between' ml='xl' bottom={10}>
				<Text fontSize='sm' color='white'>
					<Icon name='md-volume-medium' fontFamily='Ionicons' ml='lg' />
					Audio
				</Text>

				<TouchableOpacity onPress={viewTranscript}>
					<Text fontSize='sm' color='blue400'>
						Transcript
					</Text>
				</TouchableOpacity>
			</Div>
		</Div>
	)
}

type EmptyVideoProps = { opacity: number; height: number }

const EmptyVideo = ({ opacity, height }: EmptyVideoProps) => (
	<Animatable.View
		transition='opacity'
		style={{
			opacity,
			height,
			backgroundColor: 'black',
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<LottieView
			source={require('@assets/lottie/loading.json')}
			loop
			autoPlay
			style={{ width: 200, height: 200, position: 'absolute' }}
			// progress={bufferProgressAnimation}
		/>
	</Animatable.View>
)
