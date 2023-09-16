import { FormState } from "../components/Order/Order";
import { getValidDate } from "./getValidDate";

export const createOrderFormData = (data: FormState) => {
  const formData = new FormData();

  formData.set("name", data.name);
  formData.set("address", data.address);
  formData.set("date", data.date ? getValidDate(data.date) : "");
  formData.set("delivery", data.delivery);
  formData.set("phone", data.phone);
  formData.set(
    "time",
    data.time ? data.time.getHours() + ":" + data.time.getMinutes() : ""
  );
  formData.set("bouquets_order", JSON.stringify(data.bouquetsOrder));

  return formData;
};
