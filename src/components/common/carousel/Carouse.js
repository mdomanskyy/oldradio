import React from 'react';
import PropTypes from 'prop-types';
import uuid4 from 'uuid/v4';

import {Carousel as BSCarousel} from 'react-bootstrap';

const CaptionRenderBase = ({data}) => {
  return (
    <React.Fragment>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </React.Fragment>
  );
};

const renderItem = (data, captionClass, CaptionRenderer) => {
  const {image, title, text} = data;
  return (
    <BSCarousel.Item key={uuid4()}>
      <img alt={title} src={image}/>
      <BSCarousel.Caption className={captionClass}>
        <CaptionRenderer data={data} />
      </BSCarousel.Caption>
    </BSCarousel.Item>
  );
};

const Carousel = ({items, captionClass, captionRender = CaptionRenderBase, ...bsProps}) => {
  return (
    <BSCarousel {...bsProps}>
      {items.map(item=>renderItem(item, captionClass, captionRender))}
    </BSCarousel>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  captionRender: PropTypes.func,
  captionClass: PropTypes.string
};

export default Carousel;
