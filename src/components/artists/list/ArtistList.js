import React from 'react';
import uuid4 from 'uuid/v4';
import PropTypes from 'prop-types';

import ArtistListItem from './ArtistListItem';

import './ArtistList.css';

function renderArtist(artist, onClick) {
  return (
    <ArtistListItem key={uuid4()} artist={artist} onClick={onClick} />
  );
}

const ArtistList = ({artists, className, onSelect}) => {
  return (
    <ul className={`artistList ${className}`}>
      {artists.map((artist) => renderArtist(artist, onSelect))}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func
};

export default ArtistList;
