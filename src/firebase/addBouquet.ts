import { getDatabase, ref, push, set } from "firebase/database";
import { REFS } from "../constant";
import { Bouquet } from "../types/types";

export const addBouquet = (bouquet: Omit<Bouquet, "id">) => {
  const db = getDatabase();
  const bouquetRef = ref(db, REFS.bouquets);
  const newBouquetRef = push(bouquetRef);
  set(newBouquetRef, bouquet);
};
