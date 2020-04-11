import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: typeof Reactotron; // eslint-disable-line no-undef
  }
}

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'localhost' })
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
