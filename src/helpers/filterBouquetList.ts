import { Bouquet, FilterParams } from "../types/types";

export const filterBouquetList = (
  filterParams: FilterParams,
  list: Bouquet[]
) => {
  const res: Bouquet[] = [...list];
  const lowerPrice = Number(filterParams.lower_price);
  const upperPrice = Number(filterParams.upper_price);
  const name = filterParams.name;
  const type = filterParams.type;

  const filteredArr = res.filter((item, index, arr) => {
    let lowerPriceCheck: boolean = false;
    let upperPriceCheck: boolean = false;
    let nameCheck: boolean = false;
    let typeCheck: boolean = false;

    if (lowerPrice === 0 || Number(item.price) >= lowerPrice)
      lowerPriceCheck = true;
    if (upperPrice === 0 || Number(item.price) <= upperPrice)
      upperPriceCheck = true;
    if (name === "" || item.name.includes(name)) nameCheck = true;
    if (type === "" || item.type === type) typeCheck = true;

    console.log(
      "check",
      lowerPriceCheck,
      upperPriceCheck,
      nameCheck,
      typeCheck
    );
    return lowerPriceCheck && upperPriceCheck && nameCheck && typeCheck;
  });
  console.log("res", res);

  return filteredArr;
};
