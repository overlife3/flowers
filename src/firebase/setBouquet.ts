import { getDatabase, ref, set } from "firebase/database";

export function setBouquet(bouquetId: string, name: string) {
  const db = getDatabase();
  set(ref(db, "bouquet/" + bouquetId), {
    id: bouquetId,
    name: name,
  });
}
