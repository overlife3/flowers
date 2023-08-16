import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route path="/admin" element={<p>Admin</p>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
