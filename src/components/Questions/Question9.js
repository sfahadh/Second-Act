import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from "react-router-dom"
import { Progress } from 'reactstrap';


export default class Question1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nextQuestion: false,
            revealSubmit: false,
            choice1: true,
            choice2: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChoice1 = this.toggleChoice1.bind(this);
        this.toggleChoice2 = this.toggleChoice2.bind(this);
    }

    toggleChoice1() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice1: !prevState.choice1,
                choice2: true,
            }
        })
    }

    toggleChoice2() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice2: !prevState.choice2,
                choice1: true,
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
        const { nextQuestion, revealSubmit, choice1, choice2 } = this.state
        if(nextQuestion) return <Redirect to="/results"/>

        return (
        <div className="questions-page" id="q9">
         <div className="text-center">9 of 9</div>
      <Progress value="9" max="9" />
            <form className="question-form">
                <h3 className="question-header">Would you consider a program that started less than five years ago?</h3>
                <h4></h4>
                <div className={ choice1 ? 'answer-choice first' : 'condition'} 
                    onClick={this.toggleChoice1}>
                    <h5>Yes</h5>
                </div>

                <div className={ choice2 ? 'answer-choice' : 'condition'} 
                    onClick={this.toggleChoice2}>
                    <h5>No</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
