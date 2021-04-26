import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import SidebarCandidate from "components/Sidebar/SidebarCandidate";

import Taketest from "../component/TakeTest.component";
import Login from "../component/LoginRegister.component";
import dashboard from "../component/Dashboard.component";
import Testresult from "../component/TestResult.component";
import Ques from "../component/Question.component";


export default function Candidate() {
  const [loggedin, setloggedin] = useState(false);
  return (
    <>
      <SidebarCandidate />
      <div className="relative md:ml-64 bg-gray-200">
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/candidate/dashboard" exact component={Dashboard} />
            <Route path="/candidate/profile" exact component={Profile} />
            <Route path="/candidate/tests" exact component={Tests} />
            <Route path="/candidate/settings" exact component={Settings} />
            <Route path="/candidate/tables" exact component={Tables} />
            <Route exact path="/candidate/take" component={Taketest} />
            <Route exact path="/candidate/abouttest" component={Testresult} />
            <Route
                exact path={["/candidate/login", "/candidate/register"]}
                render={() => <Login setloggedin={setloggedin} />}
              />
            <Route exact path="/candidate/dashboard" component={dashboard} />
          
            <Route exact path="/candidate/test" component={Ques} />  
            <Redirect from="/candidate" to="/candidate/dashboard" />
            
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
