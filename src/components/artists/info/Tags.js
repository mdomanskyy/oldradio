import React from 'react';
import PropTypes from 'prop-types';

import './Tags.css';
import List from "../../common/list/List";

const TagItemRenderer = ({data, className, style}) => {
  return (
    <div style={style} className={`${className} tag--item`}>
      <a href={data.url} target="_blank">{data.name}</a>
    </div>
  );
};

const Tags = ({tags, className}) => {
  return (
    <div className={className}>
      <h3 className="tag--title">Related tags:</h3>
      <List className="tag--list" gap={'5px'} layout={'h'} dataProvider={tags} itemRenderer={TagItemRenderer} />
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
