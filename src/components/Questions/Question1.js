import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from "react-router-dom"

export default class Question1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nextQuestion: false,
            revealSubmit: false,
            pick: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRevealSubmit = this.handleRevealSubmit.bind(this);
    }

    handleRevealSubmit() {
        this.setState({
            revealSubmit: true,
            pick: false
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.setState({
            nextQuestion: true,
        })
    }

    render() {
        const { nextQuestion, revealSubmit, pick } = this.state
        if(nextQuestion) return <Redirect to="/question-2"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3 className="question-header">What is your area of interest?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className={ pick ? 'answer-choice second' : 'condition'} 
                    onClick={this.handleRevealSubmit}>
                    <h5>Business</h5>
                </div>

                <div className="answer-choice second" onClick={this.handleRevealSubmit}>
                    <h5>Design</h5>
                </div>

                <div className="answer-choice third" onClick={this.handleRevealSubmit}>
                    <h5>Technology</h5>
                </div>

                <div className="answer-choice" onClick={this.handleRevealSubmit}>
                    <h5>Vocational Training</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
