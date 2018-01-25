import React from 'react';
import { Switch, Route } from 'react-router-dom';
import mainNavItems from '../../navigations';

import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Switch>
        {mainNavItems.map(item => {
          return <Route key={item.path} {...item} />
        })}
      </Switch>
    </main>
  );
};

export default Main;
