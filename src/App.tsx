import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Basket from "./pages/Basket";
import AdminAuth from "./pages/AdminAuth/AdminAuth";
import Admin from "./pages/Admin/Admin";
import AddType from "./components/Admin/AddType/AddType";
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
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-type" element={<AddType />} />
        <Route path="/admin/add-bouquet" element={<p>Add bouquet</p>} />
        <Route path="/admin/remove-type" element={<p>Remove type</p>} />
        <Route path="/admin/remove-bouquet" element={<p>Remove bouquet</p>} />
        <Route path="/test" element={<Test />} />
        <Route path="/politics" element={<p>Политика конфиденциальности</p>} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
