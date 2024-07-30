import { goToPage } from "../../Routes/Coordinator";

export const handleGoBack = (e, later, navigate, setFade, setError) => {
  e.preventDefault();

  setError("");

  setFade(false);

  setTimeout(() => goToPage(navigate, later), 1000);
};

export const handleSubmit = (e, next, navigate, setFade, setError, info) => {
  e.preventDefault();

  if (!info) {
    setError("Preencha todos os campos");
  } else {
    setError("");

    setFade(false);
    setTimeout(() => goToPage(navigate, next), 1000);
  }
};
