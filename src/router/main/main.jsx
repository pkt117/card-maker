import React from "react";
import { Footer, Header, CardMaker } from "../../components";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.middle}>
        <CardMaker />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
