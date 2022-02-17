import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "./images/default_logo.png";
const Card = memo(({ card }) => {
  const { name, company, title, theme, email, message, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;
  console.log("card");
  return (
    <li className={` ${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="profile" className={styles.profile} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "colorful":
      return styles.colorful;
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
