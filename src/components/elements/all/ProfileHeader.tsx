import React from 'react'
import { Avatar, Div, Text } from 'react-native-magnus'

const ProfileHeader: React.FC = () => {
	return (
		<Div py={'lg'} px={'xl'} row alignItems='center' bg='white'>
			{/* <Avatar source={{uri: profilePicture}} rounded="lg" /> */}
			<Div ml={'lg'}>
				<Text fontSize='xl' mb={'xs'}>
					sax
				</Text>
				<Text color='gray700'>Member</Text>
			</Div>
		</Div>
	)
}

export default ProfileHeader
