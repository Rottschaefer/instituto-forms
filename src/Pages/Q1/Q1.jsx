import { useNavigate } from "react-router-dom";
import { StyledQ1 } from "./StyledQ1";
import { goToPage } from "../../Routes/Coordinator";
import { useState } from "react";

export function Q1() {
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setFade(false);
    setTimeout(() => goToPage(navigate, `/`), 1000);
  };
  return <StyledQ1 fade={fade} onClick={handleSubmit} />;
}
