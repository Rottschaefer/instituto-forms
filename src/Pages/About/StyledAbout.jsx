//Nothing specific to style on Q4

import styled from "styled-components";
import { StyledBasePage } from "../BasePage/StyledBasePage";

export const StyledAbout = styled(StyledBasePage)`
  font-family: "giarek";
  font-size: 1.5rem;
  text-align: center;
  color: rgb(89, 21, 39);
  padding: 2rem 0rem 0rem 0rem;
  background-color: #591527;
  height: auto;
  border-left: 10px solid white;
  border-top: 10px solid white;
`;

export const StyledDescription = styled.h2`
  font-family: "giarek";
  font-size: 1.2rem;
  text-align: left;
  margin: 0rem 3rem 0rem 2rem;
  color: white;
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

export const StyledGradientDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0rem 1rem 3rem 0rem;
  background: linear-gradient(180deg, rgb(89, 21, 39), rgb(30, 12, 12));
  color: white;
`;

export const StyledOlTitle = styled.h3`
  font-family: "giarek";
  text-align: center;
  margin: 2rem 2rem;
  background: linear-gradient(135deg, #f3b6b6, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  text-align: center;
  font-size: 1.2rem;
  margin: 0rem 2rem 0rem 1rem;
  color: white;
`;

export const StyledCheckbox = styled.input`
  margin-top: 0.6rem;
  /* width: 7vw;
  height: 7vw; */

  /* background-color: red;

  :checked {
    background-color: red;
  } */
`;

export const StyledAllOptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin: 0rem 2rem;
`;

export const StyledOptionDiv = styled.div`
  display: flex;
  /* justify-content: left; */
  align-items: start;
  height: auto;
`;
export const StyledLabel = styled.label`
  text-align: left;
  /* text-align: start; */
`;

// export const StyledOl = styled.ol`
//   text-align: center;
//   font-size: 1.2rem;
//   margin: 0rem 2rem 1rem 1rem;
// `;
