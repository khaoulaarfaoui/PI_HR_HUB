import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useDispatch, useSelector } from "react-redux";
import CheckButton from "react-validation/build/button";

import AuthService from "../../service/candidateService/authservice";

const RegisterCandidate = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser.id);
  const form = useRef();
  const checkBtn = useRef();
  const data = currentUser;
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState(currentUser.id);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangefullName = (e) => {
    const FullName = e.target.value;
    setFullName(FullName);
  };

  const onChangephoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };
  const onChangeUser = (e) => {
    const user = currentUser.id;
    setUser(user);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(fullName, phoneNumber, user).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="FullName">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={fullName}
                  onChange={onChangefullName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber"></label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={phoneNumber}
                  onChange={onChangephoneNumber}
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">user</label>
                <Input
                  type="text"
                  className="form-control"
                  name="password"
                  value={user}
                  onChange={onChangeUser}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default RegisterCandidate;
