import React from 'react';
import PropTypes from 'prop-types';

import SimilarInfo from './SimilarInfo';

import './ArtistInfo.css';

class ArtistInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {artist:{similar={}}} = this.props;
    return (
      <section className="artistInfo">
        <SimilarInfo similar={similar}/>
      </section>
    );
  }
}

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistInfo;
