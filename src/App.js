import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="rest">
          <main>
            <Route exact path="/" component={Home}></Route>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
