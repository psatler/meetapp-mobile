import Reactotron from 'reactotron-react-native';
import { mst } from 'reactotron-mst';
// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'localhost' })
    .useReactNative()
    .use(mst())
    // .use(reactotronRedux())
    // .use(reactotronSaga())
    .connect();

  // cleaning up the logs
  //@ts-ignore
  tron!.clear();

  console.tron = tron;
}
