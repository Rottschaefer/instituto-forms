import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import {
  StyledAbout,
  StyledAllOptionDiv,
  StyledCheckbox,
  StyledOptionDiv,
  StyledLabel,
  StyledGradientDiv,
  StyledOlOption,
  StyledUl,
  StyledOl,
  StyledUlOption,
  StyledTitle,
} from "./StyledAboutPrices";

export function AboutPrices() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (id) => {
    setInfo(optionsDescriptions[id]);
  };

  const handleNextButton = async (e) => {
    e.preventDefault();

    try {
      if (!info) {
        setError("Escolha uma opção");
      } else {
        const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            ...localData,
            option: info,
          })
        );

        handleSubmit(e, "/5", navigate, setFade, setError, info);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const optionsDescriptions = [
    "3 dias no presencial (até 2 alunos) + 6 meses online",
    "6 meses online",
  ];

  const OptionsComponent = optionsDescriptions.map((obj, id) => {
    return (
      <StyledOptionDiv key={id} onClick={() => handleInputChange(id)}>
        <StyledCheckbox type="radio" checked={info === obj} />
        <StyledLabel>{obj}</StyledLabel>
      </StyledOptionDiv>
    );
  });
  const navigate = useNavigate();

  return (
    <StyledAbout fade={fade}>
      {" "}
      <StyledTitle>A Mentoria Plena tem dois modelos: </StyledTitle>
      <StyledOl>
        <StyledOlOption>
          Online:{" "}
          <StyledUl>
            <StyledUlOption>
              Assim que realiza a matricula você tem acesso à plataforma de
              aulas com todo método Anquiloglossia em Foco ( MAF ) com 5 pilares
              com aulas, dezenas de videos de cirurgias, além de todos os
              materiais para copiar e colar e acervo de artigos.
            </StyledUlOption>
            <StyledUlOption>
              Você também terá acesso ao grupo de alunos para interação, tira
              dúvida com a Dra Irma e seu time.{" "}
            </StyledUlOption>
            <StyledUlOption>
              Você terá 6 meses de acompanhamento online pelo zoom quinzenal com
              a Dra Irma e seu time para direcionamento , feedbacks e discussões
              de casos.
            </StyledUlOption>
          </StyledUl>
        </StyledOlOption>
        <StyledOlOption>
          ONLINE + VIP PRESENCIAL: ( ver disponibilidade de vagas )
          <StyledUl>
            <StyledUlOption>Toda a experiência online acima +</StyledUlOption>
            <StyledUlOption>
              3 dias presenciais com até 2 alunas em Niterói para prática de
              cirurgias, passo a passo dos atendimentos, gestão de clínica,
              centro cirúrgico e muito mais
            </StyledUlOption>
          </StyledUl>
        </StyledOlOption>
      </StyledOl>
      <StyledGradientDiv>
        <StyledTitle>
          Qual você deseja participar caso seja aprovada sua aplicação?{" "}
        </StyledTitle>
        <StyledAllOptionDiv>{OptionsComponent}</StyledAllOptionDiv>
        {error && (
          <StyledErrorMessage style={{ color: "rgb(153, 31, 31)" }}>
            {error}
          </StyledErrorMessage>
        )}
        <StyledButtonDiv>
          <StyledButton
            onClick={(e) => handleGoBack(e, "/4", navigate, setFade, setError)}
          >
            Voltar
          </StyledButton>

          <StyledButton onClick={(e) => handleNextButton(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledGradientDiv>
    </StyledAbout>
  );
}
