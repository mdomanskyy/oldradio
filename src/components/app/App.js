import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import mainNavItems, {navBrandItem} from "../../navigations";
import Main from '../main/Main';
import Footer from '../common/footer/Footer';
import Header from "../common/header/Header";
import NotificationsContainer from '../common/notification/NotificationsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Header>
          <Navigation items={mainNavItems} brandItem={navBrandItem}/>
          <NotificationsContainer />
        </Header>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
