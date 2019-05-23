import React, { Component } from 'react';
import './Results.css'

class ResultsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }

    render() {
        return (
            <div>
                <h1 className="second-act">Second Act</h1>
                <div className="graph-container">
                    <img src={require("../../images/courseTiers.png")} alt="graph" /> 
                    <p className="results-intro"> Based on your answers, Second Act has chosen SVA's Summer     Residency course in illustration and visual storytelling as your top choice. The        course takes place over <strong>two sessions,</strong> each costing $3,000, this        put's you well <strong>within your budget</strong> of $15,000.
                    </p>
                </div>
                <h1>How The School's Compares</h1>

                <div className="progress-container">
                    <div className="school-comparison1">    
                        <img src={require("../../images/group4.png")}/>
                        <img className="map" src={require("../../images/group5.png")}/>
                    </div>

                    <div className="school-comparison2">
                        <img src={require("../../images/group2.png")}/>
                        <img  src={require("../../images/group12.png")}/>
                    </div>
                </div>

                <div className="calenderBackground">
                    <h1 className="schedule">Class Schedules</h1>
                    <img src={require("../../images/june.png")}/>
                    <img className="dates1"  src={require("../../images/rhino1.png")}/>
                    <img className="dates2"  src={require("../../images/summerResidency.png")}/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;