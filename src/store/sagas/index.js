import { all } from 'redux-saga/effects';

import {watchArtistSearchRequest, watchArtistInfoRequest} from './ArtistSagas';

function* rootSaga() {
  yield all(
    [
      watchArtistSearchRequest(),
      watchArtistInfoRequest()
    ]);
}

export default rootSaga;
