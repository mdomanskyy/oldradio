import { call } from 'redux-saga/effects';

import {watchArtistSearchRequest} from './ArtistSagas';

function* rootSaga() {
  yield call(watchArtistSearchRequest)
}

export default rootSaga;
