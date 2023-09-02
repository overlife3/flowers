import React, { Dispatch, SetStateAction } from "react";
import style from "./InputFiles.module.scss";
import { FC } from "react";
import classNames from "classnames";
import { parsingFile } from "../../../helpers/parsingFile";

export type FileData = {
  src: string;
  name?: string;
  size?: number;
};

type Props = {
  dataFiles?: FileData[];
  setFiles?: (param: FileData[]) => void;
  text: string;
  accept?: string;
  cn?: string;
  setFilesData?: (value: File[]) => void;
};

const InputFiles: FC<Props> = ({
  dataFiles,
  setFiles,
  text,
  cn,
  accept,
  setFilesData,
}) => {
  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    const files = target.files as FileList;
    const arr: File[] = [];
    for (const key in files) {
      if (typeof files[key] === "object") {
        arr.push(files[key]);
      }
    }
    if (setFilesData) {
      setFilesData(arr);
    }

    if (setFiles) {
      if (files.length !== 0) {
        const Promises = Array.from(files).map((file) => {
          return parsingFile(file);
        });

        Promise.all(Promises).then((values) => {
          const data = values.filter((i) => i !== null) as FileData[];

          if (dataFiles) setFiles([...dataFiles, ...data]);
          else setFiles([...data]);
        });
      }
    }
  };

  return (
    <label className={classNames(style.input_file, cn)}>
      <input
        type="file"
        name="cmd"
        onChange={handleSelect}
        multiple
        accept={accept ? accept : ""}
      />{" "}
      <span
        className={
          style.input_file_btn + " " + style.green_btn + " " + style.hairpin_btn
        }
      >
        {text}
      </span>
    </label>
  );
};

export default InputFiles;
