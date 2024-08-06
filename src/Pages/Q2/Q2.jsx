import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import clouds from "../../assets/clouds.jpg";
import { StyledQ2Form } from "./StyledQ2";

export function Q2() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState({ country: "", state: "", city: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("irma-mentoria"));

    if (data) {
      setInfo({
        ...info,
        country: data.country,
        state: data.state,
        city: data.city,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleQ2Submit = async (e) => {
    e.preventDefault();
    if (!info.country || !info.state || !info.city) {
      setError("Preencha todos os campos");
    } else {
      try {
        const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            ...localData,
            country: info.country,
            state: info.state,
            city: info.city,
          })
        );

        handleSubmit(e, "/about", navigate, setFade, setError, info);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={clouds}>
      {" "}
      <StyledQ2Form>
        <StyledLabel>Em que país você mora?</StyledLabel>
        <StyledInput
          name="country"
          value={info.country}
          placeholder="Coloque aqui seu país"
          onChange={(e) => handleInputChange(e)}
        />
        <StyledLabel>E em qual estado?</StyledLabel>

        <StyledInput
          name="state"
          value={info.state}
          placeholder="E em qual estado?"
          onChange={(e) => handleInputChange(e)}
        />
        <StyledLabel>E sua cidade??</StyledLabel>

        <StyledInput
          name="city"
          value={info.city}
          placeholder="E sua cidade?"
          onChange={(e) => handleInputChange(e)}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButtonDiv>
          <StyledButton
            onClick={(e) => handleGoBack(e, "/1", navigate, setFade, setError)}
          >
            Voltar
          </StyledButton>
          <StyledButton onClick={(e) => handleQ2Submit(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledQ2Form>
    </StyledBasePage>
  );
}
