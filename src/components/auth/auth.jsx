import React, { useContext } from "react";
import styles from "./auth.module.css";

const Auth = ({ authService, type }) => {
  return (
    <>
      <button className={styles.login} onClick={() => authService.login(type)}>
        {type}
      </button>
    </>
  );
};

export default Auth;
