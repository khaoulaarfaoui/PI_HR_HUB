import React from "react";
import CardLineChart from "components/Cards/CardsCandidate/CardLineChart.js";
import CardBarChart from "components/Cards/CardsCandidate/CardBarChart.js";
import CardPageVisits from "components/Cards/CardsCandidate/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardsCandidate/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
