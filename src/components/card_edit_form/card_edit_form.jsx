import React, { useRef } from "react";
import { Button } from "..";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, deleteCard, updateCard }) => {
  const { name, company, theme, title, message, email, fileName, fileURL } =
    card;

  const onChange = (e) => {
    if (e.currentTarget == null) return;
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onDeleteCard = (e) => {
    e.preventDefault();
    deleteCard(card);
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.table}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className={styles.input}
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        className={styles.input}
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.theme}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>

      <input
        type="text"
        placeholder="Title"
        name="title"
        className={styles.input}
        value={title}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className={styles.input}
        value={email}
        onChange={onChange}
      />

      <textarea
        placeholder="Message"
        name="message"
        className={styles.message}
        value={message}
        onChange={onChange}
      />

      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onDeleteCard} />
    </form>
  );
};

export default CardEditForm;
