import React from 'react';

import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { HomePage } from './pages/Home';
import './App.css'
import { Login } from './pages/Login';
import ListItems from './pages/ListItems';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
// import { PageTwo } from './pages/Page2';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/UyeGirisi" exact component={Login} />
      <Route path="/Liste" exact component={ListItems} />
      <Route path="/AdminPanel" exact component={Admin} history={useHistory()} />
      <Route path="/AdminLogin" exact component={AdminLogin} />
      {/* <Route path="/page2" exact component={PageTwo} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;