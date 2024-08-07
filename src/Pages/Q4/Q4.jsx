import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledForm,
  StyledTextarea,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import background from "../../assets/flowers-6.jpg";

import { StyledQ4Card, StyledQ4Label } from "./StyledQ4";

export function Q4() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("irma-mentoria"));

    if (data) {
      setInfo(data.interest);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInfo(value);
  };

  const handleQ5Submit = async (e) => {
    e.preventDefault();

    try {
      if (!info) {
        setError("Preencha todos os campos");
      } else {
        const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            ...localData,
            interest: info,
          })
        );

        handleSubmit(e, "/about-2", navigate, setFade, setError, info);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={background}>
      {" "}
      <StyledQ4Card>
        <StyledForm>
          <StyledQ4Label>
            Entre todas as pessoas interessadas, por que eu deveria selecionar
            você para a mentoria?
          </StyledQ4Label>
          <StyledTextarea
            name="interest"
            value={info}
            placeholder="Sua resposta"
            onChange={(e) => handleInputChange(e)}
          />

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
          <StyledButtonDiv>
            <StyledButton
              onClick={(e) =>
                handleGoBack(e, "/3", navigate, setFade, setError)
              }
            >
              Voltar
            </StyledButton>

            <StyledButton onClick={(e) => handleQ5Submit(e)}>
              Continuar
            </StyledButton>
          </StyledButtonDiv>
        </StyledForm>
      </StyledQ4Card>
    </StyledBasePage>
  );
}
