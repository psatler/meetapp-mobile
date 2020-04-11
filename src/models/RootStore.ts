import { Instance, SnapshotOut, types } from 'mobx-state-tree';

import { AuthModel } from './AuthStore';

export const RootStoreModel = types.model('RootStore').props({
  authStore: types.optional(AuthModel, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
