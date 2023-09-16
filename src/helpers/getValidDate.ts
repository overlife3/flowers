export const getValidDate = (dt: Date) => {
  return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
};
