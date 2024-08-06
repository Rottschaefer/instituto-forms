import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import background from "../../assets/shape.jpg";
import {
  StyledAbout,
  StyledAllOptionDiv,
  StyledCheckbox,
  StyledDescription,
  StyledOl,
  StyledOlTitle,
  StyledOptionDiv,
  StyledLabel,
} from "./StyledAbout";

export function About() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

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
        setIsLoading(true);
        const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            ...localData,
            experience: info,
          })
        );

        handleSubmit(e, "/3", navigate, setFade, setError, info);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const optionsDescriptions = [
    "Nunca fiz cirurgia em bebê e tenho interesse em aprender",
    "Já realizo com tesoura, bisturi ou eletrocautério",
    "Já realizo com técnica laser de alta potência",
    "Não tenho interesse em fazer cirurgias e quero me aprimorar em outras áreas da Odontopediatria",
  ];

  const OptionsComponent = optionsDescriptions.map((obj, id) => {
    return (
      <StyledOptionDiv key={id}>
        <StyledCheckbox type="checkbox" />
        <StyledLabel>{obj}</StyledLabel>
      </StyledOptionDiv>
    );
  });
  const navigate = useNavigate();

  return (
    <StyledAbout fade={fade} imgsrc={background}>
      {" "}
      <StyledDescription>
        A Mentoria Plena em Odontopediatria é o meu programa de acompanhamento
        que tem como objetivo te conduzir à conquista de segurança no
        diagnóstico, procedimentos cirúrgicos e tratamento das alterações dos
        freios orais.
        <br />
        <br />
        Desde o primeiro contato do cliente, passando pela capacitação do time
        que trabalha com você, divulgação e relacionamento com os demais
        profissionais que atuam na região… planejamento estratégico sem esquecer
        que somos mulheres além de profissionais e por isso, trazemos também
        sobre empoderamento e gestão do tempo
        <br />
        <br />
        Estes são os motivos porque o nome é Plena!!!
      </StyledDescription>
      <StyledOlTitle>A MENTORIA PLENA É COMPOSTA POR 5 PILARES:</StyledOlTitle>
      <StyledOl>
        <li>
          {" "}
          Diagnóstico assertivo: quando indicar e quando não indicar à cirurgia,
          como fazer um diagnóstico com segurança e muito mais
        </li>
        <li>
          Cirurgia: como executar com precisão, até onde ir no procedimento, pós
          operatório como conduzir o passo a passo para ter ótimos resultados e
          muito mais
        </li>
        <li>Pós operatório: O que analisar no pós operatório</li>
        <li>
          Tratamento interdisciplinar: em que momento indicar para cada
          profissional e qual atuação dos outros profissionais da equipe, como
          conduzir o tratamento dos freios e gerar segurança na família
        </li>
        <li>
          {" "}
          Percepção de valor: como conduzir o atendimento no passo a passo para
          gerar maior posicionamento e percepção de valor nos pacientes e passar
          a faturar mais
        </li>
      </StyledOl>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <StyledOlTitle>Me conte sobre sua experiência: </StyledOlTitle>
      <StyledAllOptionDiv>{OptionsComponent}</StyledAllOptionDiv>
      <StyledButtonDiv>
        <StyledButton
          onClick={(e) => handleGoBack(e, "/2", navigate, setFade, setError)}
        >
          Voltar
        </StyledButton>

        <StyledButton onClick={(e) => handleQ5Submit(e)}>
          {"Continuar"}
        </StyledButton>
      </StyledButtonDiv>
    </StyledAbout>
  );
}
