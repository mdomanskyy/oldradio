import React from 'react';
import PropTypes from 'prop-types';

import './ArtistInfo.css';

const ArtistInfo = ({artist}) => {
  return (
    <section className="artistInfo">
      Info About Artist
    </section>
  );
};

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistInfo;
