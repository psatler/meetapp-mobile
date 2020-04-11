import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Storybook from '../storybook'; //  to see the storybook
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ffafbd" />
      <Routes />
    </>
  );
}

// export default App;
export default console.tron.storybookSwitcher(Storybook)(App);
