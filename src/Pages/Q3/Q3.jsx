import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledLabel,
  StyledTextarea,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import third from "../../assets/flowers-7.jpg";
import { StyledQ3Card, StyledQ3Form } from "./StyledQ3";

export function Q3() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("irma-mentoria"));

    if (data) {
      setInfo(data.why);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInfo(value);
  };

  const handleQ3Submit = async (e) => {
    e.preventDefault();
    if (!info) {
      setError("Preencha todos os campos");
    } else {
      const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
      localStorage.setItem(
        "irma-mentoria",
        JSON.stringify({
          ...localData,
          why: info,
        })
      );
      handleSubmit(e, "/4", navigate, setFade, setError, info);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={third}>
      {" "}
      <StyledQ3Card>
        <StyledQ3Form>
          <StyledLabel>
            Por que você acredita que participar dessa mentoria é a oportunidade
            ideal para você?
          </StyledLabel>
          <StyledTextarea
            name="why"
            value={info}
            placeholder="Sua resposta"
            onChange={(e) => handleInputChange(e)}
          />

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
          <StyledButtonDiv>
            <StyledButton
              onClick={(e) =>
                handleGoBack(e, "/about", navigate, setFade, setError)
              }
            >
              Voltar
            </StyledButton>
            <StyledButton onClick={(e) => handleQ3Submit(e)}>
              Continuar
            </StyledButton>
          </StyledButtonDiv>
        </StyledQ3Form>
      </StyledQ3Card>
    </StyledBasePage>
  );
}
