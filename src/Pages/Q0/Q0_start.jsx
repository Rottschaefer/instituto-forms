import { StyledQ0 } from "./StyledQ0";
import { goToPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Q0() {
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setFade(false);
    setTimeout(() => goToPage(navigate, `/1`), 1000);
  };
  return <StyledQ0 fade={fade} onClick={handleSubmit} />;
}
