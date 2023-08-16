import style from "./Catalog.module.scss";
import FilterBouquetContainer from "../../containers/FilterBouquetContainer";
import ListBouquetContainer from "../../containers/ListBouquetContainer";
import { FC, forwardRef, useRef } from "react";

const Catalog = forwardRef<any>((props, ref) => (
  <section className={style.section} ref={ref}>
    <h2 className={style.title}>Выберите букет</h2>
    <div className={style.container}>
      <FilterBouquetContainer />
      <ListBouquetContainer />
    </div>
  </section>
));

export default Catalog;
