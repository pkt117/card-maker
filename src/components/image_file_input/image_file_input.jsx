import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";
const ImageFileInput = ({ name, imageUploader, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const onClickButton = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="image/*"
        name="file"
        className={styles.input}
        ref={fileRef}
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button}  ${name ? styles.pink : styles.grey}`}
          onClick={onClickButton}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
