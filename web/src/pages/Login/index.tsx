import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/formComponents/InputForm";
import "./login.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { Form } from '@unform/web';


const handleSubmit = (data: any) =>{
  console.log(data);
}

const Login = () => {
  let history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}> 

      
      <Card className="card">

      <div className="header-card">
          <ArrowBackIcon className="btn-icon" onClick={goBack} />
          <h2 className="title">Login</h2>
        </div>

        <InputForm name="email" label="Email" type="email" />
        <InputForm name="passoword" label="Senha" type="password" />

        <Button className="btn-login" variant="contained" color="primary">
          Entrar
        </Button>
        <Link className="btn-registro" to="/register">
          <Button color="primary">Registrar-se</Button>
        </Link>
      </Card>
      </Form>
    </div>
  );
};

export default Login;
