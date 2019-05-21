import React, { Component } from 'react'
import './Questions.css'
// import { Redirect } from "react-router-dom"

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
        // if(nextQuestion) return <Redirect to="/quiz/question-2"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3>What is your area of interest?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className="answer-choices"> 
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-1" onClick={this.handleRevealSubmit}/>
                        <label htmlFor="checkbox-1">
                            <span className="label-field">Business</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-2" onClick={this.handleRevealSubmit}/>
                        <label htmlFor="checkbox-2">
                            <span className="label-field">Design</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-3" onClick={this.handleRevealSubmit}/>
                        <label htmlFor="checkbox-3">
                            <span className="label-field">Culinary Arts</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-4" onClick={this.handleRevealSubmit}/>
                        <label htmlFor="checkbox-4">
                            <span className="label-field">Technology</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-5" onClick={this.handleRevealSubmit}/>
                        <label htmlFor="checkbox-5">
                            <span className="label-field">Vocational Training</span>
                        </label>
                    </div> 
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
