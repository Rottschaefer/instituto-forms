//Nothing specific to style on Q4

import styled from "styled-components";
import { StyledBasePage } from "../BasePage/StyledBasePage";

export const StyledAbout = styled(StyledBasePage)`
  font-family: "giarek";
  font-size: 1.5rem;
  text-align: center;
  color: rgb(89, 21, 39);
  padding: 2rem 0rem;
  background-color: white;
  height: auto;
`;

export const StyledDescription = styled.h2`
  font-family: "giarek";
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 2rem;
  color: rgb(89, 21, 39);
`;

export const StyledOlTitle = styled.h3`
  font-family: "giarek";
  /* font-size: 1.5rem; */
  text-align: center;
  margin: 2rem 2rem;
  color: rgb(89, 21, 39);
`;

export const StyledOl = styled.ol`
  text-align: center;
  font-size: 1.2rem;
  margin: 0rem 2rem 1rem 1rem;
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
