import React from "react";
import FilterBouquet from "../components/FilterBouquet/FilterBouquet";
import { typesBouquet } from "../MOCK/MOCK";

function FilterBouquetContainer() {
  return <FilterBouquet types={typesBouquet} />;
}

export default FilterBouquetContainer;
