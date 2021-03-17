import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

import BoardUser from "./views/candidate/BoardUser";
import BoardAdmin from "./views/candidate/BoardAdmin";

import { logout } from "./Redux/actions/user/auth";
import { clearMessage } from "./Redux/actions/user/message";

import { history } from "./helpers/history";

const App = () => {
  //const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      //  setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Router history={history}>
      <div>
        <div>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>

          {showAdminBoard && (
            <li>
              <Link to={"/admin"}>Admin Board</Link>
            </li>
          )}

          {currentUser && (
            <li>
              <Link to={"/user"}>User</Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div>
            <li>
              <Link to={"/profile"}>{currentUser.username}</Link>
            </li>
            <li>
              <a href="/login" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>

            <li>
              <Link to={"/register"}>Sign Up</Link>
            </li>
          </div>
        )}

        <div className=" mt-3">
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />

            <Route path="/user" component={BoardUser} />

            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
