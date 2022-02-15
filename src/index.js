import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Firebase, AuthService } from "./service/index";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
