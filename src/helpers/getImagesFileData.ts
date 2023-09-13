import { FileData } from "../types/types";
import { parsingFile } from "./parsingFile";

export const getImagesFileData = async (files: File[]) => {
  let arrFileData: FileData[] = [];
  if (files.length !== 0) {
    const Promises = Array.from(files).map((file) => {
      return parsingFile(file);
    });

    const values = await Promise.all(Promises);

    arrFileData = values.filter((i) => i !== null) as FileData[];
  }

  return arrFileData;
};
