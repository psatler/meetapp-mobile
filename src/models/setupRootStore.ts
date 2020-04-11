import { RootStoreModel, RootStore } from './RootStore';
import { onSnapshot, getSnapshot, applySnapshot } from 'mobx-state-tree';

export const setupRootStore = () => {
  const rootTree = RootStoreModel.create({
    authStore: {
      loading: false,
      loggedIn: false,
      token: '',
    },
  });
  onSnapshot(rootTree, (snapshot) => console.log('snapshot: ', snapshot));
  return { rootTree };
};
