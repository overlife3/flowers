import { IOptionSelect } from "../components/Form/Select/Select";
import { TypeBouquet } from "../types/types";

export const createOptionListFromTypesList = (
  list: TypeBouquet[]
): IOptionSelect[] => {
  const res: IOptionSelect[] = [];
  for (let item of list) {
    res.push({
      id: item.id,
      value: item.value,
    });
  }
  return res;
};
