import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";

//navbars to change based on auth
import NavbarCandidate from "./components/Navbars/CandidateNavbar";

// layouts
import ChatBotRobot from "./components/Chatbot/Chatbot.compoenent";

import Admin from "layouts/Admin";
import Candidate from "layouts/Candidate";
import Auth from "layouts/Auth.js";

// views without layouts
import Index from "views/Index";
import Event3D from "./views/EventManagement/Event3D";
import BoardUser from "./views/candidate/BoardUser";
import BoardAdmin from "./views/candidate/BoardAdmin";

import { logout } from "./Redux/actions/user/auth";
import { clearMessage } from "./Redux/actions/user/message";

import { history } from "./helpers/history";
import RegisterCandidate from "views/auth/RegisterCandidate";
import RegisterHR from "views/auth/RegisterHR";
import Profile from "views/candidate/Settings";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.userReducer.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      // setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
      //  setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      {/* {currentUser && (
        <NavbarCandidate User={currentUser.username} close={logOut} />
      )} */}
      <Switch>
        {/* <Route
          path="/admin"
          render={() =>
            currentUser ? (
              <Redirect to="/admin/jobs" />
            ) : (
              <Redirect to="/auth" />
            )
          }
        /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/candidateadd" component={RegisterCandidate} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}

        <Route path="/user" component={BoardUser} />
        <Route path="/admin" component={BoardAdmin} />
        <Route path="/event3D" component={Event3D} />
        <Route path="/candidate" component={Candidate} />
        <Route
          path="/admin"
          render={() =>
            currentUser ? (
              <Redirect to="/admin/jobs" />
            ) : (
              <Redirect to="/auth" />
            )
          }
        />
        <Route path="/hradd" component={RegisterHR} />
        <Route path="/" component={Index} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
