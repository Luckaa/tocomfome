import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/formComponents/InputForm";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <Card className="card">
        <h2 className="title">Login</h2>

        <InputForm label="Email" type="email" />
        <InputForm label="Senha" type="password" />

        <Button className="btn-login" variant="contained" color="primary">
          Entrar
        </Button>
        <Link className="btn-registro" to="/register">
          <Button color="primary">Registrar-se</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Login;
