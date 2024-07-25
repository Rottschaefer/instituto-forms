import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledQ1,
} from "./StyledQ1";
import { goToPage } from "../../Routes/Coordinator";
import { useState } from "react";

export function Q1() {
  const [fade, setFade] = useState(true);
  const [insta, setInsta] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInsta(value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!insta) {
      setError("Preencha o campo");
    } else {
      setError("");
      setFade(false);
      setTimeout(() => goToPage(navigate, `/`), 1000);
    }
  };
  return (
    <StyledQ1 fade={fade}>
      {" "}
      <StyledForm>
        <StyledInput
          placeholder="@ do seu Instagram"
          onChange={(e) => handleInputChange(e)}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButton onClick={(e) => handleSubmit(e)}>Continuar</StyledButton>
      </StyledForm>
    </StyledQ1>
  );
}
