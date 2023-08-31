import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Basket from "./pages/Basket";
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
        <Route path="/politics" element={<p>Политика конфиденциальности</p>} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
