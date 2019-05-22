import React, { Component } from 'react';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <img src="./images/courseTiers.png" alt="results-graph"/>
                 <p className="results-intro">Based on your answers, Second Act has chosen SVA's Summer Residency
                     course in illustration and visual storytelling as your top choice.
                     The course takes place over <span>two sessions,</span> each costing $3,000,
                     this put's you well <span>within your budget</span> of $15,000.
                 </p>

            </div>
           
        );
    }
}

export default ResultsPage;