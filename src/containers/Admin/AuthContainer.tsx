import React from "react";
import Auth from "../../components/Admin/Auth/Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth as AuthType } from "../../types/types";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <>
      <Auth
        onSubmit={(data: AuthType) => {
          const email = "amin@main.ru";
          const password = data.password;
          signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
              console.log(res);
              navigate("/admin");
            })
            .catch(console.error);
        }}
      />
    </>
  );
}

export default AuthContainer;
