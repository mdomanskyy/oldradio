import React from 'react';
import PropTypes from 'prop-types';

import './ArtistListItem.css';

const ArtistListItem = ({artist, onClick}) => {
  const disabled = !artist || !artist.mbid;
  const className = `artistItem ${disabled ? 'artistItem__disabled' : ''}`;
  return (
    <li className={className} onClick={()=> {!disabled && onClick(artist)}}>
      <span className="artistItem--title">{artist.name}</span>
      <img className="artistItem--image" src={artist.image[2]['#text']} alt={`${artist.name}`}/>
      <a className="artistItem--link"
         href={artist.url}
         target="_blank"
         onClick={event => event.stopPropagation()}>More</a>
    </li>
  );
};

ArtistListItem.proptypes = {
  artist: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default ArtistListItem;
