import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Cart from './Cart';

export default class SwitcherPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
