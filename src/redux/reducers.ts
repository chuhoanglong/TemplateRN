import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers, PersistConfig, persistReducer } from 'redux-persist';
import { allFilmsReducer } from '@redux/ghibli/reducers';
import { authReducer } from '@redux/auth/reducers';
import { walletReducer, WalletState } from '@redux/wallet/reducers';
import { logoutRequest, purgeRequest } from './actions';
import { Action } from 'redux';

const walletConfig: PersistConfig<any> = {
  key: 'wallet',
  storage: AsyncStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
  blacklist: ['walletName'],
};
const reducers = {
  films: allFilmsReducer,
  auth: authReducer,
  wallet: persistReducer<WalletState>(walletConfig, walletReducer),
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
  whitelist: ['films', 'auth'],
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

const resettableReducer = (state, action: Action<unknown>) => {
  if (logoutRequest.match(action)) {
    const { wallet, ...data } = state;
    AsyncStorage.removeItem('persist:root');
    AsyncStorage.removeItem('persist:wallet');
    return persistedRootReducer(data, action);
  }
  return persistedRootReducer(state, action);
};

export type RootState = ReturnType<typeof persistedRootReducer>;

export default resettableReducer;
