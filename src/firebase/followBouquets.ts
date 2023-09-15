import { Dispatch } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue } from "firebase/database";
import { REFS } from "../constant";
import { actions } from "../redux/reducers/bouquets";
import { Bouquet } from "../types/types";

type Data = { [key: string]: Omit<Bouquet, "id"> };

export const followBouquets = (dispatch: Dispatch) => {
  const db = getDatabase();
  const bouquetsRef = ref(db, REFS.bouquets);
  onValue(bouquetsRef, (snapshot) => {
    const data = snapshot.val() as Data;
    if (data) {
      const keys = Object.keys(data);
      const values = Object.values(data);
      const bouquets: Bouquet[] = [];

      for (let i = 0; i < keys.length; i++) {
        bouquets.push({
          id: keys[i],
          name: values[i].name,
          description: values[i].description,
          image: values[i].image,
          price: values[i].price,
          type: values[i].type,
        });
      }
      dispatch(actions.setBouquets(bouquets));
    } else {
      dispatch(actions.setBouquets([]));
    }
  });
};
