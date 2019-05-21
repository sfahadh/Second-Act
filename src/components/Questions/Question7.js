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
        if(nextQuestion) return <Redirect to="/question-8"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3 className="question-header">If yes, how far?</h3>
                <h4></h4>
                <div className="answer-choice first" onClick={this.handleRevealSubmit}>
                    <h5>Less than 2 hours</h5>
                </div>

                <div className="answer-choice second" onClick={this.handleRevealSubmit}>
                    <h5>2 - 5 hours</h5>
                </div>

                <div className="answer-choice" onClick={this.handleRevealSubmit}>
                    <h5>I'd move</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
