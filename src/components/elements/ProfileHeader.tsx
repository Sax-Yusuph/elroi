import React from 'react';
import {Avatar, Div, Text} from 'react-native-magnus';
import {useAppStore} from '@stores';

const ProfileHeader: React.FC = () => {
  const {
    user: {name, profilePicture},
  } = useAppStore();

  return (
    <Div py={'lg'} px={'xl'} row alignItems="center" bg="white">
      <Avatar source={{uri: profilePicture}} rounded="lg" />
      <Div ml={'lg'}>
        <Text fontSize="xl" mb={'xs'}>
          {name}
        </Text>
        <Text color="gray700">Member</Text>
      </Div>
    </Div>
  );
};

export default ProfileHeader;
