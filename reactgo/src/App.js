import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

import Portal from './Portal'
 
class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Register />
          <Portal />
      </div>
    );
  }
}

export default App;
