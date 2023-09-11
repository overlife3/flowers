import { getDatabase, ref, remove } from "firebase/database";
import { REFS } from "../constant";

export const removeTypeBouquet = (id: string) => {
  const db = getDatabase();
  const typesRef = ref(db, REFS.types + "/" + id);
  remove(typesRef);
};
