import React from 'react';
import PropTypes from 'prop-types';
import SimilarInfo from './SimilarInfo';

import './ArtistInfo.css';
import Tags from "./Tags";
import Article from "../../common/article/Article";

class ArtistInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {artist, artist:{
      similar={},
      tags:{tag:tagArray = []} = {},
      image:images = [],
      bio = {}
    }} = this.props;

    const {'#text':artistImage} = images.filter(item => item.size === "")[0] || {};

    return (
      <section className="artistInfo">
        <h2>{artist.name}<span className="artistInfo--published">{` {Published ${bio.published}}`}</span></h2>
        <div className="artistInfo--main">
          <img src={artistImage} width={300} height={300} alt={artist.name}/>
          <Article className="artistInfo--summary" title={'Summary'} text={bio.summary} maxLine={200}/>
          <SimilarInfo similar={similar}/>
        </div>
        <Tags tags={tagArray}/>
      </section>
    );
  }
}

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistInfo;
