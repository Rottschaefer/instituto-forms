import styled, { keyframes } from "styled-components";
import cortina from "../../assets/red-curtain.jpg";

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
