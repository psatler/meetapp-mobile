import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import { useSelector } from 'react-redux';
import { ApplicationState } from '~/store/createStore';

function App() {
  const isLoggedIn = useSelector(
    (state: ApplicationState) => state.auth.loggedIn
  );

  const statusBarBackgroundColor = isLoggedIn ? '#402944' : '#ffafbd';

  // logged: #2a2332, #402944)
  // not logged: #ffafbd, #ffc3a0)

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={statusBarBackgroundColor}
      />
      <Routes />
    </>
  );
}

export default App;
