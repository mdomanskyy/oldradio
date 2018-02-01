import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.renderNavigationItem = this.renderNavigationItem.bind(this);
  }

  renderNavigationItem({name, path, exact}) {
    return <NavLink className="navigation--item"
             activeClassName="navigation--item__active"
             key={path} to={path} exact={exact}>{name}</NavLink>
  }

  renderNavigationBrand({name, logo, path}) {
    return <NavLink className="navigation--brad" to={path}>
      <img src={logo} width="30" height={30} alt={name}/>
      {' '}
      Old Radio
    </NavLink>
  }

  render() {
    return (
      <nav className="navigation">
        {this.renderNavigationBrand(this.props.brandItem)}
        {this.props.items.map(this.renderNavigationItem)}
      </nav>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
  })),
  brandItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })
};

export default Navigation;
