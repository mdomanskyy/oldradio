import React from 'react';
import {connect} from 'react-redux';
import {searchArtist} from "../../actions/ArtistActions";
import SearchBox from "../common/search/SearchBox";
import ArtistList from './list/ArtistList';

import './ArtistsPage.css';

class ArtistsPage extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchOptionChange = this.onSearchOptionChange.bind(this);
    this.onArtistSelect = this.onArtistSelect.bind(this);
  }

  onSearchOptionChange(option) {
    this.props.dispatch(searchArtist(option));
  }

  onArtistSelect({mbid}) {
    this.props.history.push(`/artists/${mbid}`);
  }

  render() {
    return (
      <section className="artistsPage">
        <ArtistList className="artistsPage--list"
                    onSelect={this.onArtistSelect}
                    artists={this.props.artists} />
        <SearchBox
          className='artistsPage--searchBox'
          searchOptionChange={this.onSearchOptionChange}/>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: state.artists
});

export default connect(mapStateToProps)(ArtistsPage);
