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
            choice4: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChoice1 = this.toggleChoice1.bind(this);
        this.toggleChoice2 = this.toggleChoice2.bind(this);
        this.toggleChoice3 = this.toggleChoice3.bind(this);
        this.toggleChoice4 = this.toggleChoice4.bind(this);
    }

    toggleChoice1() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice1: !prevState.choice1,
            }
        })
    }

    toggleChoice2() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice2: !prevState.choice2,
            }
        })
    }

    toggleChoice3() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice3: !prevState.choice3,
            }
        })
    }

    toggleChoice4() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice4: !prevState.choice4,
            }
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.setState({
            nextQuestion: true,
        })
    }

    render() {
        const { nextQuestion, revealSubmit, choice1, choice2, choice3, choice4 } = this.state
        if(nextQuestion) return <Redirect to="/question-2"/>

        return (
        <div className="questions-page">
            <form className="question-form">
                <h3 className="question-header">What is your area of interest?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className={ choice1 ? 'answer-choice first' : 'condition'} 
                    onClick={this.toggleChoice1}>
                    <h5>Business</h5>
                </div>

                <div className={ choice2 ? 'answer-choice second' : 'condition'} 
                    onClick={this.toggleChoice2}>
                    <h5>Design</h5>
                </div>

                <div className={ choice3 ? 'answer-choice third' : 'condition'} 
                    onClick={this.toggleChoice3}>
                    <h5>Technology</h5>
                </div>

                <div className={ choice4 ? 'answer-choice' : 'condition'} 
                    onClick={this.toggleChoice4}>
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
