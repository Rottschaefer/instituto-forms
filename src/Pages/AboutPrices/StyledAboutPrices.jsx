//Nothing specific to style on Q4

import styled from "styled-components";
import { StyledBasePage } from "../BasePage/StyledBasePage";

export const StyledAbout = styled(StyledBasePage)`
  font-family: "montserrat";
  font-size: 1.5rem;
  text-align: center;
  color: rgb(89, 21, 39);
  padding: 2rem 0rem 0rem 0rem;
  background-color: rgb(30, 12, 12);
  height: auto;
  border: 10px solid white;
  margin: 0;

  /* border-top: 10px solid white;s */
  /* margin-right: -10px; */
`;

export const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledOlOption = styled.li`
  font-family: "giarek";

  font-size: 1.1rem;
  text-align: left;
  margin: 0rem 3rem 0rem 0rem;
  color: #f3b6b6;

  list-style: upper-roman;
`;

export const StyledUlOption = styled.li`
  font-family: "montserrat";

  font-size: 1.1rem;
  text-align: left;
  color: white;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 3rem;
  background: linear-gradient(180deg, rgb(30, 12, 12), rgb(89, 21, 39));
  color: white;
  border-left: 10px solid white;
  border-right: 10px solid white;
`;

export const StyledTitle = styled.h2`
  font-family: "giarek";
  text-align: center;
  margin: 0;
  background: linear-gradient(135deg, #f3b6b6, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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
