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
        <img className="quote"  src={require("../../images/groupCopy.png")}/>

        <img className="vicky"  src={require("../../images/victoriaHeath601796Unsplashv2Copy.png")}/>

        <button onClick={this.handleRenderToQuiz}>Find My Course</button>

        </div>
        <div className='third-image'>
        <img className="coffee-guy"  src={require("../../images/imageCopy.png")}/>
        <img className="quote2"  src={require("../../images/groupCopy2.png")}/>
        <img className="landingMsg"  src={require("../../images/weAskYouASeries.png")}/>

          
        </div>
      </div>
    )
  }
}
