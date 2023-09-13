export const getImageNameByUrl = (url: string) => {
  //"https://firebasestorage.googleapis.com/v0/b/edible-bouquet.appspot.com/o/OWuOopjcJ2tdmR4mmD-mH?alt=media&token=127aceb4-ea4c-45b2-adcc-8d3068e4a102"
  const reg = /\/o\/.+\?/;
  const matchers = url.match(reg);
  if (matchers) {
    return matchers[0].slice(3, -1);
  } else {
    throw new Error("Имя изображения не найдено");
  }
};
