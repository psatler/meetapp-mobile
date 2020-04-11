import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Storybook from '../storybook'; //  to see the storybook
import Routes from './routes';

import { RootStoreProvider } from './models/rootStoreContext';
import { setupRootStore } from './models/setupRootStore';
import { RootStore } from './models/RootStore';

function App() {
  const [rootTree, setRootTree] = React.useState<RootStore | undefined>(
    undefined
  );

  React.useEffect(() => {
    const rootTreeValues = setupRootStore().rootTree;
    setRootTree(rootTreeValues);

    if (__DEV__) {
      // giving Reactotron the RootModel tree
      console.tron.trackMstNode(rootTreeValues);
    }
  }, []);

  if (!rootTree) {
    return null;
  }

  return (
    <RootStoreProvider value={rootTree}>
      <StatusBar barStyle="light-content" backgroundColor="#ffafbd" />
      <Routes />
    </RootStoreProvider>
  );
}

// export default App;
export default console.tron.storybookSwitcher(Storybook)(App);
