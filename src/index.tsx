import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Storybook from '../storybook'; //  to see the storybook
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#ffafbd" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

// export default App;
export default console.tron.storybookSwitcher(Storybook)(App);
