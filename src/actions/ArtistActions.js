import {SEARCH_ARTIST_FAILED, SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS} from "./ActionTypes";

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
