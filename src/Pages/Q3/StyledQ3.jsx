import styled from "styled-components";
import { StyledForm } from "../BasePage/StyledBasePage";
import { StyledQuestionCard } from "../../Components/QuestionCard/StyledQuestionCard";

export const StyledQ3Form = styled(StyledForm)`
  max-width: 500px;
  /* margin-top: 200px; */
`;

// export const StyledTextarea = styled.textarea`
//   height: 7rem;
//   width: 80%;
//   font-size: 1rem;
//   font-weight: 800;
//   padding-left: 10px;
//   font-family: "giarek";
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   resize: none;
// `;

export const StyledQ3Card = styled(StyledQuestionCard)`
  background-color: linear-gradient(
    135deg,
    rgb(243, 182, 182),
    rgb(255, 255, 255)
  );
`;
