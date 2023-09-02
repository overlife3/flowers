export const fileToDataUrl = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", (e: any) => {
      resolve(e.currentTarget.result as string);
    });

    fileReader.addEventListener("error", () => {
      reject(fileReader.error);
    });

    fileReader.readAsDataURL(file);
  });
};
