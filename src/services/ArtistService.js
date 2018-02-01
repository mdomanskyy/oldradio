import * as LastFM from '../api/LastFm';

export function searchArtist(name) {
  return LastFM.request(LastFM.ARTIST_SEARCH, {artist: name})
    .then(data => {
      let {results: {artistmatches: {artist: matchedArtist}}} = data;
      return matchedArtist;
    })
    .catch(err => {
      console.log(err);
      throw new Error(err.message);
    });
}

export function getArtistInfo({name, mbid}) {
  return LastFM.request(LastFM.ARTIST_GETINFO, {artist: name, mbid})
    .then(info => {
      const {error} = info;
      if (error) {
        throw new Error(`Code ${error}: ${info.message}`);
      }
      console.log(info);
      return info.artist;
    }).catch(err => {
      console.log(err);
      throw new Error(err.message);
    });
}
