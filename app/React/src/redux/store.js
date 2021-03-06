import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootSagas from './sagas'

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                sagaMiddleware,
                logger,//actionが呼び出される時にconsoleにログを表示
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
            ),
        ),
    )
    sagaMiddleware.run(rootSagas);
    return store
}
var store = configureStore();
export default store;
