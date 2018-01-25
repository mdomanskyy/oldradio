import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Article.css';

class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, text} = this.props;
    return (
      <article className="article">
        <h1 className="article--title">{title}</h1>
        <LinesEllipsis text={text}
                       maxLine={4}
                       ellipsis='...'
                       basedOn='letters'
                       className="article--text"/>
      </article>
    );
  }
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Article;
