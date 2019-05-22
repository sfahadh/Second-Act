import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Question1 from './components/Questions/Question1'
import Question2 from './components/Questions/Question2'
import Question3 from './components/Questions/Question3'
import Question4 from './components/Questions/Question4'
import Question5 from './components/Questions/Question5'
import Question6 from './components/Questions/Question6'
import Question7 from './components/Questions/Question7'
import Question8 from './components/Questions/Question8'
import Question9 from './components/Questions/Question9'
import ResultsPage from './components/ResultsPage/ResultsPage';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="rest">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/question-1" component={Question1}></Route>
            <Route path="/question-2" component={Question2}></Route>
            <Route path="/question-3" component={Question3}></Route>
            <Route path="/question-4" component={Question4}></Route>
            <Route path="/question-5" component={Question5}></Route>
            <Route path="/question-6" component={Question6}></Route>
            <Route path="/question-7" component={Question7}></Route>
            <Route path="/question-8" component={Question8}></Route>
            <Route path="/question-9" component={Question9}></Route>
            <Route path="/results" component={ResultsPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
