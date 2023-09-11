import { getStorage, ref, uploadBytes } from "firebase/storage";

export const addImage = async (file: File, id: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, id);

  // 'file' comes from the Blob or File API
  return await uploadBytes(storageRef, file);
};
