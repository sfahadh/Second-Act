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
            choice2: true,
            choice3: true,
            choice3: true
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
                choice2: true,
                choice3: true,
                choice4: true,
            }
        })
    }

    toggleChoice2() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice2: !prevState.choice2,
                choice1: true,
                choice3: true,
                choice4: true,
            }
        })
    }

    toggleChoice3() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice3: !prevState.choice3,
                choice2: true,
                choice1: true,
                choice4: true,
            }
        })
    }

    toggleChoice4() {
        this.setState((prevState) => {
            return {
                revealSubmit: true,
                choice4: !prevState.choice4,
                choice2: true,
                choice1: true,
                choice3: true,
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
        if(nextQuestion) return <Redirect to="/question-9"/>

        return (
        <div className="questions-page" id="q8">
         <div className="text-center">8 of 9</div>
      <Progress value="8" max="9" />
            <form className="question-form">
                <h3 className="question-header">What do you hope to gain from this course?</h3>
                <h4></h4>
                <div className={ choice1 ? 'answer-choice first' : 'condition'} 
                    onClick={this.toggleChoice1}>
                    <h5>A degree</h5>
                </div>

                <div className={ choice2 ? 'answer-choice second' : 'condition'} 
                    onClick={this.toggleChoice2}>
                    <h5>A certificate</h5>
                </div>

                <div className={ choice3 ? 'answer-choice third' : 'condition'} 
                    onClick={this.toggleChoice3}>
                    <h5>General Knowledge</h5>
                </div>

                <div className={ choice4 ? 'answer-choice' : 'condition'} 
                    onClick={this.toggleChoice4}>
                    <h5>Job Placement</h5>
                </div>
                {
                    !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
                }
            </form>
        </div>
        )
    }
}
