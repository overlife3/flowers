import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

type Props = {
  children: ReactNode;
};

function RequireAuth({ children }: Props) {
  const user = useAppSelector((store) => store.user.user);

  if (user === "user") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default RequireAuth;
