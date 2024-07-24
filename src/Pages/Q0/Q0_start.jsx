import { StyledButton, StyledLogo, StyledQ0, StyledTitle } from "./StyledQ0";
import { goToPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/MP - logo principal - branco.png";
import nextImg from "../../assets/flower.jpg";

export function Q0() {
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setFade(false);
    setTimeout(() => goToPage(navigate, `/1`), 1000);
  };
  return (
    <>
      <link rel="preload" href={nextImg} as="image" />
      <StyledQ0 fade={fade}>
        <StyledLogo src={logo} />
        <StyledTitle>
          Preencha os dados abaixo e finalize sua aplicação para a Mentoria
          Plena
          <br />
          <br />
          A Dra Irma irá selecionar a dedo quem será aceito (a) e tem o perfil
          para participar.
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
