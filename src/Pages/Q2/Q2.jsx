import { useNavigate } from "react-router-dom";

import { useState } from "react";
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
import { doc } from "../../GoogleAuth";

export function Q2() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState({ country: "", state: "", city: "" });
  const [error, setError] = useState("");

  async function addToGoogleSheets() {
    try {
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[1];

      const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
      await sheet.addRow({
        Nome: localData.Nome,
        Email: localData.Email,
        Telefone: localData.Telefone,
        Instagram: localData.Instagram,
        País: info.country,
        Estado: info.state,
        Cidade: info.city,
      });
    } catch (error) {
      console.error("Erro ao testar a conexão com o Google Sheets:", error);
      console.log(error.message);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
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
        await addToGoogleSheets();
      } catch (error) {
        console.log(error.message);
      }
      // handleSubmit(e, "/3", navigate, setFade, setError, info);
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
