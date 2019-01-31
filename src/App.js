import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css'
import Home from './components/pages/Home';
import Dropin from './components/pages/Dropin';
import Admin from './components/pages/Admin';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Dropin}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
        </div>
      </Router>
    );
  }
}

export default App;
