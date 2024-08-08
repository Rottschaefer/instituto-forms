import styled, { keyframes } from "styled-components";
import flower from "../../assets/flower-1.jpg";
import { StyledQuestionCard } from "../../Components/QuestionCard/StyledQuestionCard";

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

export const StyledQ1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${flower});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out
    forwards;
`;

export const StyledQ1Card = styled(StyledQuestionCard)`
  background-color: rgb(191 170 174 / 70%);
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: 800;
  padding-left: 10px;
  font-family: "giarek";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 102%;
  height: 2rem;
  position: relative;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  border-bottom: 2px solid white;
  right: 3px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  /* opacity: ${(props) => (props.fade ? 0 : 1)};
  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out 1s
    forwards; */
  width: 57%;
  height: 4vh;
  background: linear-gradient(135deg, rgb(243, 182, 182), rgb(255, 255, 255));
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  color: rgb(89, 21, 39);
  font-family: "giarek";
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const errorAnimation = keyframes`
 from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 20px;
    opacity: 1;
  }
`;

export const StyledErrorMessage = styled.h3`
  font-family: "giarek";
  font-size: 1rem;
  color: rgb(89, 21, 39);
  height: auto;
  margin: 0px;
  animation: ${errorAnimation} 1s ease-in-out forwards;
`;
