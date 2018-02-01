import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import {GET_ARTIST_INFO_REQUEST, SEARCH_ARTIST_REQUEST} from "../../actions/ActionTypes";

import * as service from "../../services/ArtistService";

import * as actions from "../../actions/ArtistActions";

import serializeError from 'serialize-error';

function* watchSearchRequest() {
  yield takeLatest(SEARCH_ARTIST_REQUEST, requestSearch);
}

function* requestSearch(action) {
  try {
    const artists = yield call(service.searchArtist, action.option.name);
    yield put(actions.searchArtistSuccess(artists));
  } catch (err) {
    const serializedError = serializeError(err);
    yield put(actions.searchArtistFailed(serializedError));
  }
}

function *watchArtistInfoRequest() {
  yield takeEvery(GET_ARTIST_INFO_REQUEST, requestArtistInfo)
}

function *requestArtistInfo(action) {
  try {
    const artistInfo = yield call(service.getArtistInfo, action.option);
    yield put(actions.getArtistInfoSuccess(artistInfo));
  } catch(err) {
    const serializedError = serializeError(err);
    yield put(actions.getArtistInfoFailed(serializedError, err.message));
  }
}

export {watchSearchRequest as watchArtistSearchRequest, watchArtistInfoRequest}
