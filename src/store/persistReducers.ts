import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line
export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp-frontend',
      storage: AsyncStorage, // must explicity tells the storage: https://github.com/rt2zz/redux-persist#v6-upgrade
      whitelist: ['auth', 'user'], // reducers we want to persist
    },
    reducers
  );

  return persistedReducer;
};
