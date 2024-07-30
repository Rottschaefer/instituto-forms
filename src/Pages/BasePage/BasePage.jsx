import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./StyledBasePage";

import flowerImage from "../../assets/flower-1.jpg";
import fish from "../../assets/fish.jpg";
import { useState } from "react";
import { goToPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export function BasePage() {
  const [fade, setFade] = useState(true);
  const [background, setBackground] = useState(0);
  const [inputName, setInputName] = useState(0);
  const [info, setInfo] = useState({
    instagram: "",
    country: "",
    state: "",
    city: "",
    nome: "",
  });
  const [error, setError] = useState("");

  const images = [flowerImage, fish, flowerImage];
  const inputNames = ["instagram", "country", "state", "city", "nome"];
  const placeHolders = [
    ["@ do seu instagram"],
    ["Em que país você mora?", "E em qual estado?", "E sua cidade?"],
    [
      "Por que você acredita que participar dessa mentoria é a oportunidade ideal para você?",
    ],
    [
      "Entre todas as pessoas interessadas, por que eu deveria selecionar você para a mentoria?",
    ],
  ];

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
    console.log(inputName);
  };

  const handleGoBack = (e) => {
    e.preventDefault();

    if (background == 0) {
      goToPage(navigate, "/");
    } else {
      setError("");

      setFade(false);
      setTimeout(() => {
        setBackground(background - 1);
        setInputName(inputName - placeHolders[background].length);
        setFade(true);
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!info[inputNames[background]]) {
      setError("Preencha todos os campos");
    } else {
      setError("");

      setFade(false);
      setTimeout(() => {
        setBackground(background + 1);
        setInputName(inputName + placeHolders[background].length);
        setFade(true);
      }, 1000);
    }
  };

  return (
    <StyledBasePage fade={fade} imgsrc={images[background]}>
      {" "}
      <StyledForm>
        {placeHolders[background].map((item, index) => (
          <>
            <StyledLabel>{item}</StyledLabel>
            <StyledInput
              key={item}
              name={inputNames[inputName + index]}
              value={info[inputNames[inputName + index]]}
              // placeholder={item}
              onChange={(e) => handleInputChange(e)}
            />
          </>
        ))}
        {/* <StyledInput
          name={inputNames[background]}
          value={info[inputNames[background]]}
          placeholder={placeHolders[background]}
          onChange={(e) => handleInputChange(e)}
        /> */}
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButtonDiv>
          <StyledButton onClick={(e) => handleGoBack(e)}>Voltar</StyledButton>
          <StyledButton onClick={(e) => handleSubmit(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledForm>
    </StyledBasePage>
  );
}
