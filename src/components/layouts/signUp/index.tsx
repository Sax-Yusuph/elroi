import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native'
import { Button, Div, Text, Input, Checkbox, Header, StatusBar } from 'react-native-magnus'
import PatternBg from '@assets/img/svgs/patternpad.svg'
import { ImageOverlay, OverlayImageStyle } from '@elements/imageOverlay'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {
	handleSignUp: () => void
}
const OVERLAY_HEIGHT = 216

export default ({ handleSignUp }: Props) => {
	const headerHeight = useHeaderHeight()

	const { width } = useWindowDimensions()

	const ImageOverlayStyle: OverlayImageStyle = {
		minHeight: OVERLAY_HEIGHT,
		paddingHorizontal: 16,
		paddingTop: 24,
		paddingBottom: 44,
		overlayColor: 'rgba(0,0,0,0.3)',
		width,
	}

	return (
		<Div flex={1} bg='white'>
			<StatusBar backgroundColor='blue800' />
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.select({
					ios: 'padding',
					android: undefined,
				})}
				keyboardVerticalOffset={headerHeight}
			>
				<ScrollView>
					<ImageOverlay
						style={ImageOverlayStyle}
						source={require('@assets/img/svgs/patternpad.png')}
					/>
					<Div my={'lg'} mx={'lg'}>
						<Text color='gray800' mb='md'>
							Full Name
						</Text>
						<Input placeholder='Username' autoFocus={true} />
					</Div>

					<Div my={'lg'} mx={'lg'}>
						<Text color='gray800' mb='md'>
							Email Address
						</Text>
						<Input />
					</Div>

					<Div my={'md'} mx={'lg'}>
						<Text color='gray800' mb='md'>
							Password
						</Text>
						<Input />
					</Div>

					<Div my={'md'} mx={'lg'}>
						<Text color='gray800' mb='md'>
							Re-type Password
						</Text>
						<Input />
					</Div>

					<Div mx='lg' my='lg'>
						<Checkbox
							mb='md'
							value={1}
							suffix={
								<Text flex={1} ml='md' fontSize='md' color='gray600'>
									Remember me
								</Text>
							}
						/>
						<Checkbox
							mb='md'
							value={2}
							suffix={
								<Text flex={1} ml='md' fontSize='md' color='gray600'>
									I agree to the Privacy Policy
								</Text>
							}
						/>
					</Div>
					<Button block mx='lg' py='lg' variant='brand' onPress={handleSignUp}>
						Sign Up
					</Button>

					<Text>Or sign in using</Text>
				</ScrollView>
				<Div h={40} />
			</KeyboardAvoidingView>
		</Div>
	)
}

{
	/* <Header
				p='lg'
				bg='transparent'
				borderBottomWidth={1}
				borderBottomColor='gray200'
				alignment='left'
				prefix={
					<Button bg='transparent'>
						<Icon name='arrow-left' fontFamily='Feather' fontSize='2xl' />
					</Button>
				}
				>
				My Title
			</Header> */
}
