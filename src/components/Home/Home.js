import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      toQuiz: false
    }
    this.handleRenderToQuiz = this.handleRenderToQuiz.bind(this)
  }

  handleRenderToQuiz(evt) {
    evt.preventDefault();
    this.setState({
      toQuiz: true
    })
  }

  render() {
    if(this.state.toQuiz) { return <Redirect to="/question-1"/> }
    return (
      <div className='home-page'>

        <div className='header'>
          <h1>Second Act</h1>
        </div>

        <div className='first-image'>
          <img className="quote" src={require("../../images/groupCopy.png")}/>
          <img className="vicky" src={require("../../images/victoriaHeath601796Unsplashv2Copy.png")}/>
          <button onClick={this.handleRenderToQuiz}>Find My Course</button>
        </div>

        <div className='third-image'>
          <img className="quote2" src={require("../../images/quote2.png")}/>
        </div>

        <div className='home-last-quote'> 
          <h2>What Second Act does:</h2>
          <p>We ask you a series of questions about your timeframe, budget and goals. Then we compare all of the available programs based on your answers and provide you with the most ideal fit. You can access more information about the courses from our results page.</p>
        </div>

      </div>
    )
  }
}
