import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getImageUrl = async (name: string) => {
  const storage = getStorage();
  return await getDownloadURL(ref(storage, name));
};
