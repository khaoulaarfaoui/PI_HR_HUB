import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import CandidateNavbar from "components/Navbars/CandidateNavbar";
import HeaderStats from "components/Headers/HeaderStatsCandidate.js";
import FooterAdmin from "components/Footers/FooterCandidate.js";

// views

import Dashboard from "views/candidate/Dashboard.js";
import Maps from "views/candidate/Maps.js";
import Settings from "views/candidate/Settings.js";
import Tables from "views/candidate/Tables.js";
import SidebarCandidate from "components/Sidebar/SidebarCandidate";

export default function Admin() {
  return (
    <>
      <SidebarCandidate />
      <div className="relative md:ml-64 bg-gray-200">
        <CandidateNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/candidate/dashboard" exact component={Dashboard} />
            <Route path="/candidate/maps" exact component={Maps} />
            <Route path="/candidate/settings" exact component={Settings} />
            <Route path="/candidate/tables" exact component={Tables} />
            <Redirect from="/candidate" to="/candidate/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
