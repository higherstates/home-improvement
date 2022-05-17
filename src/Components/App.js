'use strict';

import React, { Component } from 'react';
import { Main } from './Main/Main'

//css
require('style-loader!./App.css');

class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Improvement</h1>
        <Main />
      </div>
    );
  }
}

export default App;