import React from 'react';
import PropTypes from 'prop-types';

import {Carousel as BSCarousel} from 'react-bootstrap';

const renderItem = ({image, title, text}) => {
  return (
    <BSCarousel.Item>
      <img alt={title} src={image}/>
      <BSCarousel.Caption>
        <h3>{title}</h3>
        <p><a target="_blank" href={text}>{'More Info'}</a></p>
      </BSCarousel.Caption>
    </BSCarousel.Item>
  );
};

const Carousel = ({items}) => {
  return (
    <BSCarousel>
      {items.map(renderItem)}
    </BSCarousel>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string
  })).isRequired
};

export default Carousel;
