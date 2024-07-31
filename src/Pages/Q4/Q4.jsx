import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledForm,
  StyledLabel,
  StyledTextarea,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import fourth from "../../assets/snow-tree.jpg";
import { doc } from "../../GoogleAuth";

export function Q4() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInfo(value);
  };

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
        País: localData.country,
        Estado: localData.state,
        Cidade: localData.city,
        Motivo: localData.why,
        Interesse: localData.interest,
      });
    } catch (error) {
      console.error("Erro ao testar a conexão com o Google Sheets:", error);
      console.log(error.message);
    }
  }

  const handleQ4Submit = async (e) => {
    e.preventDefault();
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

      await addToGoogleSheets();

      setError("Obrigado!");
      // handleSubmit(e, "/4", navigate, setFade, setError, info);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={fourth}>
      {" "}
      <StyledForm>
        <StyledLabel>
          Entre todas as pessoas interessadas, por que eu deveria selecionar
          você para a mentoria?
        </StyledLabel>
        <StyledTextarea
          name="interest"
          value={info}
          placeholder="Sua resposta"
          onChange={(e) => handleInputChange(e)}
        />

        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButtonDiv>
          <StyledButton
            onClick={(e) => handleGoBack(e, "/2", navigate, setFade, setError)}
          >
            Voltar
          </StyledButton>
          <StyledButton onClick={(e) => handleQ4Submit(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledForm>
    </StyledBasePage>
  );
}