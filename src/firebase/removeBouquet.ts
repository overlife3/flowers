import { getDatabase, ref, remove } from "firebase/database";
import { REFS } from "../constant";

export const removeBouquet = (id: string) => {
  const db = getDatabase();
  const bouquetsRef = ref(db, REFS.bouquets + "/" + id);
  remove(bouquetsRef);
};
