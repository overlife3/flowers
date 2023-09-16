import { FormState } from "../components/MakeBouquet/MakeBouquet";

export const createMakeFormData = (data: FormState) => {
  const formData = new FormData();

  formData.set("name", data.name);
  formData.set("phone", data.phone);

  return formData;
};
