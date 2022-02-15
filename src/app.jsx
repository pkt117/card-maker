import styles from "./app.module.css";
import { Login, Main } from "./router/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route path="/main" element={<Main authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
