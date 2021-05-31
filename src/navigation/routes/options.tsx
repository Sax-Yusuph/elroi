import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon, Text} from 'react-native-magnus';

type Routes = 'home' | 'favorites' | 'notes' | 'events' | 'more';

interface HomeOptions extends Record<Routes, BottomTabNavigationOptions> {}

export const HOME_TAB_OPTIONS: HomeOptions = {
  home: {
    tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
    tabBarLabel: props => (
      <Text fontSize="xs" {...props} mb={5}>
        Home
      </Text>
    ),
  },

  favorites: {
    tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
    tabBarLabel: props => (
      <Text fontSize="xs" {...props} mb={5}>
        Home
      </Text>
    ),
  },

  notes: {
    tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
    tabBarLabel: props => (
      <Text fontSize="xs" {...props} mb={5}>
        Home
      </Text>
    ),
  },

  events: {
    tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
    tabBarLabel: props => (
      <Text fontSize="xs" {...props} mb={5}>
        Home
      </Text>
    ),
  },

  more: {
    tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
    tabBarLabel: props => (
      <Text fontSize="xs" {...props} mb={5}>
        Home
      </Text>
    ),
  },
};
