import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import resettableReducer, { persistedRootReducer } from '@redux/reducers';
import rootSaga from '@redux/rootSaga';
import { createLogger } from 'redux-logger';

// Setup Middlewares
const logger = createLogger({
  collapsed: true,
  timestamp: false,
  duration: true,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    // This is needed because redux-persist will prompt an error.  Redux-persist is using default redux configuration and redux-starter-kit is waiting for a string.
    serializableCheck: {
      // Redux bothers with payload.file that is a non-serializable value
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
  logger,
];

// Create Store
const store = configureStore({
  reducer: resettableReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// Start rootSaga
sagaMiddleware.run(rootSaga);

// Setup Store persistence
const persistor = persistStore(store, null);

export { store, persistor };
