import {
  StyledButton,
  StyledLogo,
  StyledQ0,
  StyledSpan,
  StyledTitle,
} from "./StyledQ0";
import { goToPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/MP - logo principal - branco.png";
import nextImg from "../../assets/flower-1.jpg";

export function Q0() {
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setFade(false);
    setTimeout(() => goToPage(navigate, `/1`), 1000);
  };
  return (
    <>
      <StyledQ0 fade={fade}>
        <link rel="preload" href={nextImg} as="image" />
        <StyledLogo src={logo} />
        <StyledTitle>
          <StyledSpan>Preencha os dados abaixo</StyledSpan> e finalize sua
          aplicação para a Mentoria Plena
          <br />
          <br />
          São <StyledSpan>7 perguntas</StyledSpan> a serem respondidas em, em
          média, <StyledSpan>5 minutos</StyledSpan>
          <br />
          <br />
          As candidatas serão
          <StyledSpan> selecionadas pela própria Dra Irma</StyledSpan> de acordo
          com o perfil apresentado.
          <br />
          <br />
          Ao ser aprovado (a) na Mentoria iremos entrar em contato no seu
          WhatsApp. Boa sorte!
        </StyledTitle>
        <StyledButton fade={fade} onClick={handleSubmit}>
          Começar
        </StyledButton>
      </StyledQ0>
    </>
  );
}
