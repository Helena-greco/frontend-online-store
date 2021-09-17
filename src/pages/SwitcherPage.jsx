import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';

export default class SwitcherPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}
