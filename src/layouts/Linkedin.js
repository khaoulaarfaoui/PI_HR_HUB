import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
// components

//import CandidateNavbar from "components/Navbars/CandidateNavbar";
import HeaderStats from "components/Headers/HeaderStatsCandidate.js";
import FooterAdmin from "components/Footers/FooterCandidate.js";

// views
import LinkedinNavbar from "components/Navbars/LinkedinNavbar";
import SidebarCandidate from "components/Sidebar/SidebarCandidate";
import LinkedinProfile from "views/linkedin/LinkedinProfile";

export default function Linkedin() {
  return (
    <>
      <LinkedinNavbar />
      <SidebarCandidate />
      <div className="relative md:ml-64  md:pt-3 pb-32 pt-12">
        {/* Header */}
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full mt-8">
          <Switch>
            <Route
              path="/linkedin/LinkedinProfile"
              exact
              component={LinkedinProfile}
            />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
