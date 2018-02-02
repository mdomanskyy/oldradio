import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '../../common/carousel/Carouse';

import './SimilarInfo.css';

const mapToCarouselItem = (artistInfo) => {
  const {name:title, url:text, image:images } = artistInfo;
  let image = images.find(item => item.size === 'mega');
  image = image['#text'] || '';
  return {title, text, image};
};

const SimilarCaptionRenderer = ({data}) => {
  return (
    <React.Fragment>
      <h3>{data.title}</h3>
      <a href={data.text}>{'Get More!'}</a>
    </React.Fragment>
  );
};

const SimilarInfo = ({similar}) => {
  if (!similar.artist || similar.artist.length <= 0) return null;
  const items = similar.artist.map(mapToCarouselItem);
  return (
        <div className="similarArtists">
          <h3>Similar Artists</h3>
          <Carousel items={items}
                    captionRender={SimilarCaptionRenderer}
                    captionClass={'similarCaption'}
                    className={'similarCarousel'}
                    slide={true}
                    controls={false} />
        </div>
  );
};

SimilarInfo.propTypes = {
  similar: PropTypes.object.isRequired
};

export default SimilarInfo;
