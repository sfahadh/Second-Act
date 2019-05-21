import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from "react-router-dom"

export default class Question1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nextQuestion: false,
            revealSubmit: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRevealSubmit = this.handleRevealSubmit.bind(this);
    }

    handleRevealSubmit() {
        this.setState({
            revealSubmit: true,
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.setState({
            nextQuestion: true
        })
    }

    render() {
        const { nextQuestion, revealSubmit } = this.state
        if(nextQuestion) return <Redirect to="/question-4"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3 className="question-header">How much time can you commit to a program in a week?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className="answer-choice first" onClick={this.handleRevealSubmit}>
                    <h5>1 - 6 hours</h5>
                </div>

                <div className="answer-choice second" onClick={this.handleRevealSubmit}>
                    <h5>7 - 14 hours</h5>
                </div>

                <div className="answer-choice" onClick={this.handleRevealSubmit}>
                    <h5>15 - 40 hours</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
