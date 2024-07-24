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
  display: flex;
  justify-content: center;
  align-items: center;
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
  box-shadow: 10px 5px 5px black;
  color: rgb(89, 21, 39);
  font-family: "giarek";
  font-size: 1.3rem;
`;
