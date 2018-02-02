import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Article.css';

class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, text, maxLine = 4, className} = this.props;
    return (
      <article className={`article ${className}`}>
        <h1 className="article--title">{title}</h1>
        <LinesEllipsis text={text}
                       maxLine={maxLine}
                       ellipsis='...'
                       basedOn='letters'
                       className="article--text"/>
      </article>
    );
  }
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  maxLine: PropTypes.number
};

export default Article;
