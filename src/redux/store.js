import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducers';
import gameReducer from './reducers/gameReducers';
import { getEnvVars } from '../utils/envs';
const env = getEnvVars(window.location.host);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares =
  env.ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger);

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancer(middlewares));
export const persistor = persistStore(store);
export default store;
