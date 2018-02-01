import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import './ArtistInfoPage.css';
import ArtistInfo from "./info/ArtistInfo";
import { getArtistInfo } from "../../actions/ArtistActions";

class ArtistInfoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {match:{params:{id:mbid}}} = this.props;
    this.props.dispatch(getArtistInfo({mbid}));
  }

  render() {
    return (
      <section className="artistPage">
        {JSON.stringify(this.props.artistInfo)}
        <ArtistInfo artist={{name:'test'}}/>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artistInfo: state.artistInfo
  }
};


export default withRouter(connect(mapStateToProps)(ArtistInfoPage));
