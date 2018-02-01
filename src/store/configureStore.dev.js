import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import initialState from "./initialStore";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
