import React, { useState } from "react";
import axios from "axios";
import styles from "./LoginRegister.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  if (localStorage.getItem("auth-token")) history.push("/candidate/taketest");

  const onSubmit = (event) => {
    event.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:8082/api/user/login", { email, password }, options)
      .then((res) => {
        console.log(res);
        localStorage.setItem("loggedin", true);
        localStorage.setItem("auth-token", res.headers["auth-token"]);
        localStorage.setItem("name", res.data.name);
        //props.setloggedin(true);
        history.push("/candidate/alltests");
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong Credentials!");
      });
  };

  return (
  
    
   
    <div className={styles.parent}>
      <div className={styles.child}>
        <h1 className={styles.heading}>Login</h1>
        
        <form onSubmit={onSubmit}>
          <label className={styles.labels} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.inputs}
            id="email"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className={styles.labels} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.inputs}
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className={styles.buttons}>
            Login
          </button>
         <br/>
              <li className="items-center">
                <Link
                  className={
                   
                    (window.location.href.indexOf("/candidate/register") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/candidate/register"
                >
                  <i
                    className={
                   
                      (window.location.href.indexOf("/candidate/register") !==
                      -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                 Register
                </Link>
              </li>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
