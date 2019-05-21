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
    if(this.state.toQuiz) { return <Redirect to="/quiz/question-1"/> }
    return (
      <div className='home-page'>
        <div className='header'>
          <h1>Good Apples</h1>
        </div>
        <div className='first-image'>
          <button onClick={this.handleRenderToQuiz}>Find My Course</button>
        </div>
        <div className='second-image'></div>
        <div className='third-image'>
          <h2>What Good Apples does:</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </div>
    )
  }
}
