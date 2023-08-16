import { createContext, useContext } from "react";

const RefsContext = createContext<any>(null);

export function useChildComponentRef() {
  return useContext(RefsContext);
}

export default RefsContext;
