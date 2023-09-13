import React, { useState } from "react";
import Auth from "../../components/Admin/Auth/Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth as AuthType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actions } from "../../redux/reducers/user";

type State = {
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

function AuthContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const [state, setState] = useState(initialState);

  const setIsLoading = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLoading: value }));
  const setError = (err: any) =>
    setState((prevState) => ({ ...prevState, error: err }));

  return (
    <>
      <Auth
        error={state.error}
        isLoading={state.isLoading}
        setError={setError}
        onSubmit={async (data) => {
          setIsLoading(true);
          const email = "admin@admin.ru";
          const password = data.password;

          await signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
              dispatch(actions.setUser("admin"));
              navigate("/admin");
            })
            .catch((err) => {
              console.dir(err.message);
              setError(err);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      />
    </>
  );
}

export default AuthContainer;
