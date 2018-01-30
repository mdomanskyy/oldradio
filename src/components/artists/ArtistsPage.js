import React from 'react';
import {connect} from 'react-redux';
import {searchArtist} from "../../actions/ArtistActions";
import SearchBox from "../common/search/SearchBox";

import './ArtistsPage.css';

class ArtistsPage extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchOptionChange = this.onSearchOptionChange.bind(this);
  }

  onSearchOptionChange(option) {
    this.props.dispatch(searchArtist(option));
  }

  render() {
    return (
      <section className="artistsPage">
        <SearchBox searchOptionChange={this.onSearchOptionChange}/>
        <ul>
        {this.props.artists.map((item) => {
                    return <li>{item.name}</li>
                })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: state.artists
});

export default connect(mapStateToProps)(ArtistsPage);
