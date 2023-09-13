import { getStorage, ref, uploadBytes } from "firebase/storage";

export const addImage = async (file: File, id: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, id);

  const res = await uploadBytes(storageRef, file); // ошибки firebase пробрасывает сам по себе

  return res;
};
