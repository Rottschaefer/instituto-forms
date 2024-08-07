import {
  StyledLogo,
  StyledQ5,
  StyledSpan,
  StyledTitle,
} from "./StyledFormsEnd";

import logo from "../../assets/MP - logo principal - branco.png";

export function FormsEnd() {
  return (
    <>
      <StyledQ5>
        <StyledLogo src={logo} />
        <StyledTitle>
          <StyledSpan>Parabéns!</StyledSpan> Sua aplicação para a Mentoria Plena
          foi finalizada
          <br />
          <br />
          Entraremos em contato assim que sua aplicação for revisada :)
        </StyledTitle>
      </StyledQ5>
    </>
  );
}
