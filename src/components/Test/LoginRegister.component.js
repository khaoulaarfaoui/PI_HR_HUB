import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./LoginRegister.module.css";
import Login from "./Login.component";


function LoginRegister(props) {
  let history = useHistory();
  if (localStorage.getItem("loggedin")) history.push("/");
  return (
    <>
    <div className={styles.container}>
      <Login {...props} />
      
    </div>
    </>
  );
}

export default LoginRegister;
