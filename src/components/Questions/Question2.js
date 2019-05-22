import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from "react-router-dom"

export default class Question1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nextQuestion: false,
            revealSubmit: false,
            choice1: true,
            choice2: true,
            choice3: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChoice1 = this.toggleChoice1.bind(this);
        this.toggleChoice2 = this.toggleChoice2.bind(this);
        this.toggleChoice3 = this.toggleChoice3.bind(this);
    }


    toggleChoice1() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice1: !prevState.choice1,
                choice2: false,
                choice3: false
            }
        })
    }

    toggleChoice2() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice2: !prevState.choice2,
                choice1: false,
                choice3: false
                }
        })
    }

    toggleChoice3() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice3: !prevState.choice3,
                choice2: false,
                choice1: false
            }
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.setState({
            nextQuestion: true
        })
    }

    render() {
        const { nextQuestion, revealSubmit, choice1, choice2, choice3, } = this.state
        if(nextQuestion) return <Redirect to="/question-3"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3 className="question-header">How much are you willing to spend on school?</h3>
                <h4></h4>
                <div className={ choice1 ? 'answer-choice first' : 'condition'} 
                    onClick={this.toggleChoice1}>
                    <h5>$10,000+</h5>
                </div>

                <div className={ choice2 ? 'answer-choice second' : 'condition'} 
                    onClick={this.toggleChoice2}>
                    <h5>$1000 - $10,000</h5>
                </div>

                <div className={ choice3 ? 'answer-choice' : 'condition'} 
                    onClick={this.toggleChoice3}>
                    <h5>$0 - $999</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
