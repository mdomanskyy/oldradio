import React from 'react';
import {bindActionCreators} from 'redux';

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
    this.props.getArtistInfo({mbid});
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

const mapDispatchToProps = (dispatch) => ({
  getArtistInfo: bindActionCreators(getArtistInfo, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistInfoPage));
