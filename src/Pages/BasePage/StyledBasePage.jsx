import styled, { keyframes } from "styled-components";

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

export const StyledBasePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out
    forwards;
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

export const StyledTextarea = styled.textarea`
  font-size: 1rem;
  font-weight: 800;
  padding-left: 10px;
  font-family: "giarek";
  height: 7rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  max-width: 100px;
  width: 40%;
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
  margin: 0px;
  animation: ${errorAnimation} 1s ease-in-out forwards;
`;

export const StyledLabel = styled.label`
  display: block;
  max-width: 80vw;
  font-family: "giarek";
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(89, 21, 39);
`;
