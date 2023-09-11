import { getDatabase, ref, push, set } from "firebase/database";
import { REFS } from "../constant";

export const addTypeBouquet = (type: string) => {
  const db = getDatabase();
  const typeListRef = ref(db, REFS.types);
  const newTypeRef = push(typeListRef);
  set(newTypeRef, type);
};
