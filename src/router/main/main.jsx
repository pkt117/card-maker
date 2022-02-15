import React, { useEffect } from "react";
import { Footer, Header, CardMaker } from "../../components";
import styles from "./main.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Main = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationId = location.state.id;

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate("/");
    });
  });

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.middle}>{/* <CardMaker /> */}</section>
      <Footer />
    </section>
  );
};

export default Main;
