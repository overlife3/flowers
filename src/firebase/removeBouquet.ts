import { getDatabase, ref, remove } from "firebase/database";
import { REFS } from "../constant";
import { getImageNameByUrl } from "../helpers/getImageNameByUrl";
import { removeImage } from "./removeImage";

export const removeBouquet = async (id: string, imagesUrl: string[]) => {
  const db = getDatabase();
  const bouquetsRef = ref(db, REFS.bouquets + "/" + id);
  const namesImages: string[] = [];
  for (let imageUrl of imagesUrl) {
    namesImages.push(getImageNameByUrl(imageUrl));
  }

  const removeImagesPromises = namesImages.map((name) => {
    removeImage(name);
  });

  await Promise.all(removeImagesPromises);

  await remove(bouquetsRef);
};
