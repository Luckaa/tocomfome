import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputForm from "../../components/formComponents/InputForm";
import { Form } from '@unform/web';
import "./register.scss";
import usersService from "../../services/users.service";

const Register = () => {
  let history = useHistory();

  const [clientType, setClientType] = useState("client");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientType((event.target as HTMLInputElement).value);
  };
  const goBack = () => history.goBack();


  const handleSubmit = async (data: any) => {
    try {
      data.type = clientType
      const response = await usersService.registerUser(data);
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data.errors)
    }

  }


  return (
    <div className="register-container">
      <Card className="card">
        <Form onSubmit={handleSubmit}>
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

          <InputForm name="name" label="Nome" />
          <InputForm name="email" label="Email" type="email" />
          <InputForm name="password" label="Senha" type="password" />
          <InputForm name="validatePassword" label="Confirmar senha" type="password" />

          {clientType === "restaurant" && (
            <>
              <InputForm name="cnpj" label="CNPJ" />
              <InputForm name="adress" label="Endereço" />
              <InputForm name="localName" label="Nome do estabelecimento" />
            </>
          )}

          <Button className="btn-register" type="submit" variant="contained" color="primary">
            Cadastrar-se
        </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
