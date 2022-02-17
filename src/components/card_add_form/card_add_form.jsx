import React, { useRef, useState } from "react";
import { Button } from "..";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  const onFileChange = (file) => {
    setFile((prev) => ({ ...prev, fileName: file.name, fileURL: file.url }));
  };

  return (
    <form ref={formRef} className={styles.table}>
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className={styles.input}
      />
      <input
        ref={companyRef}
        type="text"
        placeholder="Company"
        className={styles.input}
      />
      <select ref={themeRef} className={styles.theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>

      <input
        ref={titleRef}
        type="text"
        placeholder="Title"
        className={styles.input}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className={styles.input}
      />

      <textarea
        ref={messageRef}
        placeholder="Message"
        className={styles.message}
      />

      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" className={styles.add} onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
