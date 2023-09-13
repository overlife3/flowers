import { getDatabase, ref, push, set } from "firebase/database";
import { REFS } from "../constant";

export const addTypeBouquet = async (type: string) => {
  const db = getDatabase();
  const typeListRef = ref(db, REFS.types);
  const newTypeRef = await push(typeListRef);
  await set(newTypeRef, type);
};
