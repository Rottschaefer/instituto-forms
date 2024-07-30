import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import flower from "../../assets/flower-1.jpg";

export function Q1() {
  const [fade, setFade] = useState(true);
  const [insta, setInsta] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInsta(value);
  };

  const handleSubmitQ1 = (e) => {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
    localStorage.setItem(
      "irma-mentoria",
      JSON.stringify({ ...localData, Instagram: insta })
    );
    handleSubmit(e, "/2", navigate, setFade, setError, insta);
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={flower}>
      {" "}
      <StyledForm>
        <StyledLabel>Qual o @ do seu instagram?</StyledLabel>
        <StyledInput
          placeholder="Seu @"
          onChange={(e) => handleInputChange(e)}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButtonDiv>
          <StyledButton
            onClick={(e) => handleGoBack(e, "/", navigate, setFade, setError)}
          >
            Voltar
          </StyledButton>
          <StyledButton onClick={(e) => handleSubmitQ1(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledForm>
    </StyledBasePage>
  );
}
