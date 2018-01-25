import { takeLatest, call, put } from 'redux-saga/effects';

import {SEARCH_ARTIST_REQUEST} from "../../anctions/ActionTypes";
import { searchArtist } from "../../services/ArtistService";
import {searchArtistFailed, searchArtistSuccess} from "../../anctions/ArtistActions";

function* watchSearchRequest() {
  yield takeLatest(SEARCH_ARTIST_REQUEST, requestSearch);
}

function* requestSearch(action) {
  try {
    const artists = yield call(searchArtist, action.option.name);
    yield put(searchArtistSuccess(artists));
  } catch (err) {
    console.log(err);
    yield put(searchArtistFailed(err));
  }
}

export {watchSearchRequest as watchArtistSearchRequest}
