import { Dispatch } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue } from "firebase/database";
import { REFS } from "../constant";
import { actions } from "../redux/reducers/bouquets";
import { TypeBouquet } from "../types/types";

type Data = { [key: string]: string };

export const followTypes = (dispatch: Dispatch) => {
  const db = getDatabase();
  const typesRef = ref(db, REFS.types);
  onValue(typesRef, (snapshot) => {
    const data = snapshot.val() as Data;
    if (data) {
      const keys = Object.keys(data);
      const values = Object.values(data);
      const types: TypeBouquet[] = [];

      for (let i = 0; i < keys.length; i++) {
        types.push({
          id: keys[i],
          value: values[i],
        });
      }
      dispatch(actions.setTypes(types));
    } else {
      dispatch(actions.setTypes([]));
    }
  });
};
