import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/login/Login";
import Navbar from "./component/navbar/Navbar";
import "./App.css";
import store from "./redux/store";
import authToken from "./utils/authToken";
import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      authToken(localStorage.token);
    }

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: "LOGOUT" });
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Navbar />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
