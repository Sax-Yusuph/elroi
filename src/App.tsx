import React from 'react';
import {Host} from 'react-native-magnus';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Root from './router/Root';
import RootNavigator from '@navigation/index';

const App: React.FC = () => {
  return (
    <Host>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Host>
  );
};

export default App;
