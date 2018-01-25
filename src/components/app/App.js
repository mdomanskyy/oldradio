import React, {Component} from 'react';
import {getArtistInfo, searchArtist} from "../../services/ArtistService";

import Navigation from "../navigation/Navigation";
import mainNavItems, {navBrandItem} from "../../navigations";
import Main from '../main/Main';
import Footer from '../common/footer/Footer';

import './App.css';
import Header from "../common/header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    searchArtist('as').then(artists => {
      this.setState({
        artists: artists
      });
    });
  }

  onArtistClick(item) {
    getArtistInfo(item);
  }

  render() {
    return (
      <div className='app'>
        <Header>
          <Navigation items={mainNavItems} brandItem={navBrandItem}/>
        </Header>
        <Main/>
        <Footer/>
        {/*{this.state.artists.map((item) => {
                    return <li onClick={e => this.onArtistClick(item)}>{item.name}</li>
                })}*/}
      </div>
    );
  }
}

export default App;
