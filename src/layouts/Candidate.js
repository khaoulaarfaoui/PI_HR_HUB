import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

//import CandidateNavbar from "components/Navbars/CandidateNavbar";
import HeaderStats from "components/Headers/HeaderStatsCandidate.js";
import FooterAdmin from "components/Footers/FooterCandidate.js";

// views
import Profile from "views/candidate/Profile.js";
import Dashboard from "views/candidate/Dashboard.js";
import Tests from "views/candidate/Tests.js";
import Settings from "views/candidate/Settings.js";
import Tables from "views/candidate/Tables.js";
import Chat from "../components/Chat/App";
import SidebarCandidate from "components/Sidebar/SidebarCandidate";
import NavbarCandidate from "components/Navbars/CandidateNavbar";

export default function Candidate() {
  return (
    <>
      <NavbarCandidate />
      <SidebarCandidate />
      <div className="relative md:ml-64 bg-gray-200 md:pt-3 pb-32 pt-12">
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full mt-20">
          <Switch>
            <Route path="/candidate/dashboard" exact component={Dashboard} />
            <Route path="/candidate/profile" exact component={Profile} />
            <Route path="/candidate/tests" exact component={Tests} />
            <Route path="/candidate/settings" exact component={Settings} />
            <Route path="/candidate/tables" exact component={Tables} />
            <Route path="/candidate/chat" exact component={Chat} />
            <Redirect from="/candidate" to="/candidate/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
