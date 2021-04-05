import React, { Component } from "react";
import Jobs from "container/Candidate";

import CardBarChart from "components/Cards/CardsHR/CardBarChart.js";
import TestJob from "components/Cards/CardsCandidate/testCandidate";
import CardAddJob from "components/Cards/CardsCandidate/CardAddCandidate";

class CandidateDispaly extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="relative flex-col ">
        <div className="w-full  ">
          <CardAddCandidate />
        </div>

        <div
          className="  flex 	  align-content:space-between; flex-wrap 
        "
        >
          <Candidate />
        </div>
      </div>
    );
  }
}
export default CandidateDispaly;
