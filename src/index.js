import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import {
  AuthService,
  FirebaseDB,
  ImageUploader,
  Firebase,
} from "./service/index";
import { ImageFileInput } from "./components";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const firebaseDB = new FirebaseDB(Firebase);
const FileInput = (props) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      firebaseDB={firebaseDB}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
