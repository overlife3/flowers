import { nanoid } from "@reduxjs/toolkit";
import { AddBouquetFormState } from "../components/Admin/AddBouquet/AddBouquetForm/AddBouquetForm";
import { Bouquet } from "../types/types";
import { addBouquet } from "./addBouquet";
import { addImage } from "./addImage";
import { getImageUrl } from "./getImageUrl";

export const createBouquet = async (data: AddBouquetFormState) => {
  const images = data.images;
  const imagesId = images.map(() => nanoid());
  const imagesUpload = images.map((image, index) =>
    addImage(image, imagesId[index])
  );

  // Promise.all(imagesUpload)
  //   .then((res) => {
  //     console.log(res);
  //     const bouquet: Omit<Bouquet, "id"> = {
  //       name: data.name,
  //       description: data.description,
  //       price: data.price,
  //       type: data.type.value,
  //       image: imagesId,
  //     };
  //     addBouquet(bouquet);
  //   })
  //   .catch(console.error);

  await Promise.all(imagesUpload);

  const imagesUrlPromises = imagesId.map((item) => getImageUrl(item));

  const imagesUrl = await Promise.all(imagesUrlPromises).then((res) => {
    console.log(res);
    const bouquet: Omit<Bouquet, "id"> = {
      name: data.name,
      description: data.description,
      price: data.price,
      type: data.type.value,
      image: res,
    };
    addBouquet(bouquet);
  });
};
