import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../common/carousel/Carouse';

import './ArtistInfo.css';

class ArtistInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  mapToCarouselItem(artistInfo) {
    const {name:title, url:text, image:images } = artistInfo;
    let image = images.find(item => item.size === 'mega');
    image = image['#text'] || '';
    return {title, text, image};
  }

  renderSimilar() {
    const similar = this.props.artist.similar;
    if (similar && similar.artist.length > 0) {
      const items = similar.artist.map(this.mapToCarouselItem);
      return (
        <div className="similarArtists">
          <h3>Similar Artists</h3>
          <Carousel items={items} />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <section className="artistInfo">
        {this.renderSimilar()}
      </section>
    );
  }
}

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistInfo;
