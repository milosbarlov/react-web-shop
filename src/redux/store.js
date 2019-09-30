import { createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';
import rootSaga from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const middleware = [logger,sagaMiddleware];

export const store = createStore(rootReducer,applyMiddleware(...middleware));


export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default {store,persistor};

