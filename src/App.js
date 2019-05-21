import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Question1 from './components/Questions/Question1'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="rest">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/question-1" component={Question1}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
