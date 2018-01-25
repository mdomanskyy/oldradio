import React, {Component} from 'react';
import {getArtistInfo, searchArtist} from "../../services/ArtistService";

import Header from '../common/header/Header';
import Navigation from "../navigation/Navigation";
import mainNavItems, { navBrandItem } from "../../navigations";
import Main from '../main/main';

import './App.css';

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
                <Navigation items={mainNavItems} brandItem={navBrandItem} />
                <Main />
                {/*{this.state.artists.map((item) => {
                    return <li onClick={e => this.onArtistClick(item)}>{item.name}</li>
                })}*/}
            </div>
        );
    }
}

export default App;
