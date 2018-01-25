import React from 'react';

const Header = (props) => {
  return (
      <header className="container">
          {props.children}
      </header>
  );
};

export default Header;
