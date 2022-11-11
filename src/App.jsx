import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Hakkimizda } from './pages/Hakkımızda';
import './App.css'
import { Login } from './pages/Login';
import ListItems from './pages/ListItems';
import Admin from './pages/Admin';
// import { PageTwo } from './pages/Page2';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/Hakkımızda" exact component={Hakkimizda} />
      <Route path="/UyeGirisi" exact component={Login} />
      <Route path="/Liste" exact component={ListItems} />
      <Route path="/AdminPanel" exact component={Admin} />
      {/* <Route path="/page2" exact component={PageTwo} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;