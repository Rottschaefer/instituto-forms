import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const StyledLoading = styled(AiOutlineLoading)`
  width: 50%;
  height: auto;
  color: #591527;
  animation: rotate infinite 1s linear;
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;

export const StyledLoadingConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.conteinerSize};
`;
