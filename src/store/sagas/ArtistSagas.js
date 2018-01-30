import { takeLatest, call, put } from 'redux-saga/effects';

import {SEARCH_ARTIST_REQUEST} from "../../actions/ActionTypes";
import { searchArtist } from "../../services/ArtistService";
import {searchArtistFailed, searchArtistSuccess} from "../../actions/ArtistActions";

import serializeError from 'serialize-error';

function* watchSearchRequest() {
  yield takeLatest(SEARCH_ARTIST_REQUEST, requestSearch);
}

function* requestSearch(action) {
  try {
    const artists = yield call(searchArtist, action.option.name);
    yield put(searchArtistSuccess(artists));
  } catch (err) {
    const serializedError = serializeError(err);
    yield put(searchArtistFailed(serializedError));
  }
}

export {watchSearchRequest as watchArtistSearchRequest}
