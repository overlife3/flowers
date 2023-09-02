import { FileData } from "../types/types";
import { fileToDataUrl } from "./fileToDataUrl";

export const parsingFile = async (file: File): Promise<FileData | null> => {
  const data = await fileToDataUrl(file)
    .then((url) => ({ src: url, name: file.name, size: file.size }))
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};
