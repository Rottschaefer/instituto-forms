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
import background from "../../assets/flowers-8.jpg";
import { Loading } from "../../Components/Loading/Loading";

import { StyledQ5Card, StyledQ5Label } from "./StyledQ5";
import { doc } from "../../GoogleAuth";

export function Q5() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("irma-mentoria"));

  //   if (data) {
  //     setInfo(data.interest);
  //   }
  // }, []);

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
        nome: localData.name,
        email: localData.email,
        telefone: localData.phone,
        instagram: localData.insta,
        pais: localData.country,
        estado: localData.state,
        cidade: localData.city,
        experiencia: localData.experience,
        motivo: localData.why,
        interesse: localData.interest,
        opcao: localData.option,
        desejo: info,
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
        await addToGoogleSheets();

        handleSubmit(e, "/thank-you", navigate, setFade, setError, info);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);

      setError(error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={background}>
      {" "}
      <StyledQ5Card>
        <StyledForm>
          <StyledQ5Label>
            O que precisa acontecer com você, ao final do seu ciclo de mentoria,
            para você dizer que valeu participar? (Detalhe qual a transformação
            que deseja alcançar)
          </StyledQ5Label>
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
                handleGoBack(e, "/about-2", navigate, setFade, setError)
              }
            >
              Voltar
            </StyledButton>

            <StyledButton onClick={(e) => handleQ5Submit(e)}>
              {isLoading ? <Loading /> : "Aplicar"}
            </StyledButton>
          </StyledButtonDiv>
        </StyledForm>
      </StyledQ5Card>
    </StyledBasePage>
  );
}
