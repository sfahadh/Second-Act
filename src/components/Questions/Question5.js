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
        if(nextQuestion) return <Redirect to="/question-6"/>

        return (
        <div className="questions-page" id="q5">
            <form className="question-form">
                <h3 className="question-header">Where are you located?</h3>
                <h4></h4>
                <div className="answer-choice" id="mapbox" onClick={this.handleRevealSubmit}>
                    <i class="material-icons">add_location</i>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
