import {
  GET_ARTIST_INFO_FAILED,
  GET_ARTIST_INFO_REQUEST, GET_ARTIST_INFO_SUCCESS, SEARCH_ARTIST_FAILED, SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_SUCCESS
} from "./ActionTypes";

export const searchArtist = (option) => ({
  type: SEARCH_ARTIST_REQUEST,
  option: option
});

export const searchArtistFailed = (err) => ({
  type: SEARCH_ARTIST_FAILED,
  error: err,
  message: 'Search request failed. Please try again later.'
});

export const searchArtistSuccess = (artists) => ({
  type: SEARCH_ARTIST_SUCCESS,
  artists: artists
});

export const getArtistInfo = (option) => ({
  type: GET_ARTIST_INFO_REQUEST,
  option
});

export const getArtistInfoSuccess = (artistInfo) => ({
  type: GET_ARTIST_INFO_SUCCESS,
  artistInfo
});

export const getArtistInfoFailed = (error, message = 'Get Artist Info Failed.') => ({
  type: GET_ARTIST_INFO_FAILED,
  error,
  message
});
