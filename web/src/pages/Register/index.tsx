import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputForm from "../../components/formComponents/InputForm";
import "./register.scss";

const Register = () => {
  let history = useHistory();

  const [clientType, setClientType] = useState("client");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientType((event.target as HTMLInputElement).value);
  };
  const goBack = () => history.goBack();

  return (
    <div className="register-container">
      <Card className="card">
        <div className="header-card">
          <ArrowBackIcon className="btn-icon" onClick={goBack} />
          <h2 className="title">Cadastrar-se</h2>
        </div>

        <RadioGroup value={clientType} onChange={handleChange}>
          <FormControlLabel
            value="client"
            control={<Radio />}
            label="Sou cliente"
          />
          <FormControlLabel
            value="restaurant"
            control={<Radio />}
            label="Sou restaurante"
          />
        </RadioGroup>

        <InputForm label="Nome" />
        <InputForm label="Email" type="email" />
        <InputForm label="Senha" type="password" />
        <InputForm label="Confirmar senha" type="password" />

        {clientType === "restaurant" && (
          <>
            <InputForm label="CNPJ" />
            <InputForm label="Endereço" />
            <InputForm label="Nome do estabelecimento" />
          </>
        )}

        <Button className="btn-register"  variant="contained" color="primary">
          Cadastrar-se
        </Button>
      </Card>
    </div>
  );
};

export default Register;
