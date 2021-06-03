import React, { useEffect, useRef, useState } from 'react'
import { Pressable, useWindowDimensions } from 'react-native'
import Video, { OnLoadData, OnProgressData } from 'react-native-video'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ProgressView } from '@react-native-community/progress-view'
import VoiceNote from '@assets/img/svgs/voiceNote.svg'
import { SharedElement } from 'react-navigation-shared-element'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { VideoItem } from '@models/app.model'
import { Div, Text, Icon } from 'react-native-magnus'

// import Animated, { block } from 'react-native-reanimated'

export interface PlayerProps {
	onPress?: () => void
	viewTranscript?: () => void
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
	const { onPress, onProgressChange, video, openFullScreenMode } = props
	const [opacity, setOpacity] = React.useState(1)
	const { width } = useWindowDimensions()
	const height = width * 0.5625
	const [videoState, setVideoState] = useState<VideoState>(initialState)

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

	const viewTranscript = () => {
		viewTranscript()
	}

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
						<Animatable.View transition='opacity' style={{ opacity }}>
							<Video
								source={video.video}
								resizeMode='cover'
								style={{ width: '100%', borderRadius: 10, height }}
								// repeat
								poster='paused'
								audioOnly={false}
								fullscreen={false}
								fullscreenOrientation='landscape'
								playInBackground={false}
								paused={videoState.paused}
								{...{ onLoad, onProgress, onEnd }}
								ref={ref => (videoRef.current = ref)}

								// pictureInPicture={true}
							/>
						</Animatable.View>
					</SharedElement>
				) : null}
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
					<Icon name='md-volume-medium' fontFamily='Ionicons' ml='md' />
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
