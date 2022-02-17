import React from "react";
import { CardAddForm, CardEditForm } from "..";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addAndUpdate, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {Object.keys(cards).map((key) => (
        <CardEditForm
          FileInput={FileInput}
          card={cards[key]}
          key={key}
          deleteCard={deleteCard}
          updateCard={addAndUpdate}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addAndUpdate} />
    </section>
  );
};

export default Editor;
