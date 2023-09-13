import { getStorage, ref, deleteObject } from "firebase/storage";

export const removeImage = async (name: string) => {
  const storage = getStorage();
  const desertRef = ref(storage, name);
  await deleteObject(desertRef);
};
