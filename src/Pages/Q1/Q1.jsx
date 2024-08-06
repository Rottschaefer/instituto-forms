import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  StyledBasePage,
  StyledButton,
  StyledButtonDiv,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../BasePage/StyledBasePage";
import { handleGoBack, handleSubmit } from "../BasePage/functions";
import flower from "../../assets/flower-1.jpg";
import sub from "../../assets/shape.jpg";

export function Q1() {
  const [fade, setFade] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    insta: "",
  });
  const [localData, setLocalData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("irma-mentoria"));
    if (!data || data.show) {
      setLocalData(false);
    }

    if (data) {
      setInfo({
        ...info,
        name: data.Nome,
        email: data.Email,
        phone: data.Telefone,
        insta: data.Instagram,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmitQ1 = (e) => {
    e.preventDefault();

    try {
      if (!localData) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        const fullNameRegex =
          /^[a-zA-Zà-úÀ-Ú\s]{2,}(?: [a-zA-Zà-úÀ-Ú\s]+){1,}$/;

        if (!info.name || !fullNameRegex.test(info.name)) {
          throw new Error("Por favor, coloque seu nome completo");
        }

        if (!info.email || !emailRegex.test(info.email)) {
          throw new Error("Por favor, coloque um email válido");
        }

        if (!info.phone || !phoneRegex.test(info.phone)) {
          throw new Error("Por favor, coloque um telefone válido com DDD");
        }
        if (!info.insta) {
          throw new Error("Preencha todos os campos");
        }

        localStorage.setItem(
          "irma-mentoria",
          JSON.stringify({
            Nome: info.name,
            Email: info.email,
            Telefone: info.phone,
            Instagram: info.insta,
            show: true,
          })
        );
      } else {
        if (!info.insta) {
          throw new Error("Preencha todos os campos");
        } else {
          const localData = JSON.parse(localStorage.getItem("irma-mentoria"));
          localStorage.setItem(
            "irma-mentoria",
            JSON.stringify({ ...localData, insta: info.insta })
          );
        }
      }

      handleSubmit(e, "/2", navigate, setFade, setError, info);
    } catch (error) {
      setError(error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledBasePage fade={fade} imgsrc={localData ? flower : sub}>
      {" "}
      <StyledForm>
        {!localData && (
          <>
            <StyledLabel>Qual o seu nome?</StyledLabel>
            <StyledInput
              name="name"
              value={info.name}
              placeholder="Seu nome"
              onChange={(e) => handleInputChange(e)}
            />
            <StyledLabel>Qual o seu email?</StyledLabel>
            <StyledInput
              name="email"
              value={info.email}
              placeholder="Seu email"
              onChange={(e) => handleInputChange(e)}
            />

            <StyledLabel>Qual o seu whatsapp com DDD?</StyledLabel>
            <StyledInput
              name="phone"
              value={info.phone}
              placeholder="Seu telefone com DDD"
              onChange={(e) => handleInputChange(e)}
            />
          </>
        )}
        <StyledLabel>Qual o @ do seu instagram?</StyledLabel>
        <StyledInput
          name="insta"
          value={info.insta}
          placeholder="Seu @"
          onChange={(e) => handleInputChange(e)}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <StyledButtonDiv>
          <StyledButton
            onClick={(e) => handleGoBack(e, "/", navigate, setFade, setError)}
          >
            Voltar
          </StyledButton>
          <StyledButton onClick={(e) => handleSubmitQ1(e)}>
            Continuar
          </StyledButton>
        </StyledButtonDiv>
      </StyledForm>
    </StyledBasePage>
  );
}
