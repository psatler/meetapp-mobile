import { Instance, SnapshotOut, types } from 'mobx-state-tree';

export const AuthModel = types
  .model('AuthStore')
  .props({
    token: types.optional(types.string, ''),
    loading: types.optional(types.boolean, false),
    loggedIn: types.optional(types.boolean, false),
  })
  .views((self) => ({}))
  .actions((self) => ({
    toggleLoading() {
      self.loading = !self.loading;
    },
  }));

type AuthType = Instance<typeof AuthModel>;
export interface Auth extends AuthType {}
type AuthSnapshotType = SnapshotOut<typeof AuthModel>;
export interface AuthSnapshot extends AuthSnapshotType {}
