import React from "react";
import ErrorAlert from "../Alert/ErrorAlert/ErrorAlert";

type Props = {
  message: string;
  setError: (err: any) => void;
};

function ErrorsLogin({ message, setError }: Props) {
  if (/auth\/wrong-password/.test(message))
    return (
      <ErrorAlert title="Неправильный пароль" onClick={() => setError(null)} />
    );

  if (/auth\/too-many-requests/.test(message))
    return (
      <ErrorAlert
        title="Превышен лимит попыток"
        onClick={() => setError(null)}
      />
    );
  return (
    <ErrorAlert
      title="Произошла ошибка"
      desc="Попробуйте снова"
      onClick={() => setError(null)}
    />
  );
}

export default ErrorsLogin;
