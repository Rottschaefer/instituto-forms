import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
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
import background from "../../assets/flowers-6.jpg";
import { doc } from "../../GoogleAuth";
import { Loading } from "../../Components/Loading/Loading";
import { StyledQ4Card, StyledQ4Label } from "./StyledQ4";

export function Q4() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
        Experiência: localData.experience,
        Motivo: localData.why,
        Interesse: localData.interest,
      });
    } catch (error) {
      console.error("Erro ao testar a conexão com o Google Sheets:", error);
      console.log(error.message);
    }
  }

  const handleQ5Submit = async (e) => {
    e.preventDefault();

    try {
      if (!info) {
        setError("Preencha todos os campos");
      } else {
        setIsLoading(true);
        const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            ...localData,
            interest: info,
          })
        );

        await addToGoogleSheets();

        // setError("Obrigado!");
        handleSubmit(e, "/5", navigate, setFade, setError, info);
        setIsLoading(false);
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
              {isLoading ? <Loading /> : "Aplicar"}
            </StyledButton>
          </StyledButtonDiv>
        </StyledForm>
      </StyledQ4Card>
    </StyledBasePage>
  );
}
