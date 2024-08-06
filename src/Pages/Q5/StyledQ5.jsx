import styled, { keyframes } from "styled-components";
import cortina from "../../assets/red-curtain-1.jpg";

const fadeIn = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

export const StyledQ5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: black;
  background-image: url(${cortina});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const StyledSpan = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 107%;
  text-align: center;
  color: rgb(255, 213, 213);
  margin: 0;
  z-index: 0;
`;

export const StyledLogo = styled.img`
  width: 55vw;
  margin-bottom: -15vw;
  margin-top: -10vw;
`;

export const StyledTitle = styled.h2`
  font-family: "giarek";
  font-size: 1.5rem;
  text-align: center;
  margin: 5% 10%;
  z-index: 2;
`;
