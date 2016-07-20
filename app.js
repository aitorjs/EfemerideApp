'use strict'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import AppComponent from './components/AppComponent'
import PageHome from './pages/PageHome'

ReactDOM.render(<Router history={hashHistory}>
    <Route component={AppComponent}>
      <Route path='/' component={PageHome} />
    </Route>
    <Route path='*' component={PageHome} />
  </Router>, document.getElementById('container'))
