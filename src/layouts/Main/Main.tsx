import React, { useRef } from "react";
import AttractSection from "../../sections/Attract/Attract";
import MakeSection from "../../sections/Make/Make";
import CatalogSection from "../../sections/Catalog/Catalog";
import Contacts from "../../sections/Contacts/Contacts";
import MainSection from "../../sections/Main/Main";
import MasterSection from "../../sections/Master/Master";
import AdvantagesSection from "../../sections/Advantages/Advantages";
import RefsContext from "../../context/refs";
import Header from "../Header/Header";
import MoveUp from "../../components/decorations/MoveUp/MoveUp";
import Basket from "../../components/decorations/Basket/Basket";
import SideNav from "../../components/SideNav/SideNav";

const Main = () => {
  const catalogRef = useRef(null);
  const makeRef = useRef(null);
  const advantagesRef = useRef(null);
  const masterRef = useRef(null);
  return (
    <RefsContext.Provider
      value={{
        catalogRef: catalogRef,
        makeRef: makeRef,
        advantagesRef: advantagesRef,
        masterRef: masterRef,
      }}
    >
      <Header />
      <MainSection catalogRef={catalogRef} />
      <CatalogSection ref={catalogRef} />
      <MakeSection ref={makeRef} />
      <MasterSection ref={masterRef} />
      <AdvantagesSection ref={advantagesRef} />
      <Contacts />
      <MoveUp />
      <Basket />
    </RefsContext.Provider>
  );
};

export default Main;
