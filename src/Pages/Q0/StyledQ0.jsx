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

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledQ0 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${cortina});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out
    forwards;
`;

export const StyledButton = styled.button`
  opacity: ${(props) => (props.fade ? 0 : 1)};
  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out 1s
    forwards;
  width: 43vw;
  height: 7vh;
  background: linear-gradient(135deg, rgb(243, 182, 182), rgb(255, 255, 255));
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  color: rgb(89, 21, 39);
  font-family: "giarek";
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
