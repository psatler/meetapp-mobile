import { createStore, compose, applyMiddleware, Store } from 'redux';

// importing individual reducer types
import { AuthState } from './ducks/auth/types';
import { MeetupState } from './ducks/meetup/types';
import { UserState } from './ducks/user/types';

// store type definitions
export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  meetups: MeetupState;
}

// it creates the store and adds the middlewares and enhancers
export default (reducers: any, middlewares: any): Store<ApplicationState> => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
