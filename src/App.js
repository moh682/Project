import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar.js'

import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
      

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects/" component={Projects} />
      </div>
      </Router>
    );
  }
}

export default App;
