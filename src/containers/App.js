import React, {Component} from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from '../components/Header';
import Board from '../components/Board'

// import { Home, Login, Register } from "./"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/category" component={Board} />
              <Route path="/cart" component={Board} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;