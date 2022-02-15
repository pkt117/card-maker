import React from "react";
import { Header, Auth, Footer } from "../../components/index";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.middle}>
        <h1 className={styles.title}>Login</h1>
        <Auth type="Google" authService={authService} />
        <Auth type="Github" authService={authService} />
      </div>
      <Footer />
    </section>
  );
};

export default Login;
