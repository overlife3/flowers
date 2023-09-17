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
import AddBouquet from "./components/Admin/AddBouquet/AddBouquet";
import RemoveType from "./components/Admin/RemoveType/RemoveType";
import RemoveBouquet from "./components/Admin/RemoveBouquet/RemoveBouquet";
import { followTypes } from "./firebase/followTypes";
import { useDispatch } from "react-redux";
import { followBouquets } from "./firebase/followBouquets";
import RequireAuth from "./hoc/RequireAuth";
import AdminMain from "./components/Admin/Main/Main";
import { getDatabase, goOffline } from "firebase/database";
import Polytics from "./pages/Politycs/Polytics";

function App() {
  const dispatch = useDispatch();
  window.addEventListener("beforeunload", function () {
    goOffline(getDatabase());
  });
  followTypes(dispatch);
  followBouquets(dispatch);
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
        <Route path="/login" element={<AdminAuth />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<AdminMain />} />
          <Route path="/admin/add-type" element={<AddType />} />
          <Route path="/admin/add-bouquet" element={<AddBouquet />} />
          <Route path="/admin/remove-type" element={<RemoveType />} />
          <Route path="/admin/remove-bouquet" element={<RemoveBouquet />} />
        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="/politics" element={<Polytics />} />
        {/* <Route path="/basket" element={<Basket />} /> */}
        <Route path="/*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}

export default App;
