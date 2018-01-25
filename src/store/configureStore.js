import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import initialState from "./initialStore";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    initialState,
    enhancer(
      applyMiddleware(sagaMiddleware)
    ));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
