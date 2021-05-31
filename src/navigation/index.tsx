import {CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/Home';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import MainApp, {DrawerParamsList} from './routes/Main';
import {StreamStackParamsList} from './types/defs/types';
import OnBoarding from '@screens/OnBoarding';
import RNBootSplash from 'react-native-bootsplash';
import {useRouteState} from '@stores';

export type RootParamsList = {
  OnBoarding?: undefined;
  Preferences?: undefined;
  JoinEvent?: undefined;
  Auth?: undefined; //-->TODO
  App?: NavigatorScreenParams<DrawerParamsList>;
  StreamEvent?: NavigatorScreenParams<StreamStackParamsList>;
};

const Root = createStackNavigator();

const RootNavigator: React.FC = () => {
  /**manage states such as streamingOn, onBoardingDone, isAuthenticated */
  // const {
  //   showOnboarding,
  //   showPreferences,
  //   showApp,
  //   streamingOn,
  //   isGuest,
  //   showAuth,
  // } = useRouteState(state => state);
  const showOnboarding = useRouteState(state => state.showOnboarding);
  const showPreferences = useRouteState(state => state.showPreferences);
  const showApp = useRouteState(state => state.showApp);
  const streamingOn = useRouteState(state => state.showEventStream);
  const isGuest = useRouteState(state => state.isGuest);
  const showAuth = useRouteState(state => state.showAuth);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Root.Navigator headerMode="none" mode="modal">
        {showOnboarding && (
          <Root.Screen name="Onboarding" component={OnBoarding} />
        )}

        {showAuth && <Root.Screen name="Auth" component={Home} />}

        {showPreferences && <Root.Screen name="Preferences" component={Home} />}

        {isGuest && <Root.Screen name="JoinEvent" component={Home} />}

        {streamingOn && <Root.Screen name="StreamEvent" component={Home} />}
        {showApp && <Root.Screen name="App" component={MainApp} /*a drawer*/ />}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

/**screenOptions={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          cardStyle: {backgroundColor: 'white'},
        }} */
