import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
  interface Console {
    tron: typeof Reactotron; // eslint-disable-line no-undef
  }
}

if (__DEV__) {
  //@ts-ignore
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ host: 'localhost' })
    .useReactNative({
      storybook: true,
    })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  // cleaning up the logs
  //@ts-ignore
  tron!.clear();

  console.tron = tron;
}
