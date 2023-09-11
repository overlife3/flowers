import { Bouquet } from "../types/types";

export const getBouquetsByType = (type: string, bouquets: Bouquet[]) => {
  return bouquets.filter((item) => {
    return item.type === type;
  });
};
