import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputForm from '../../components/formComponents/InputForm';
import { useAuth } from '../../context/auth.context';
import { getFieldErrors } from '../../helper/error.handler';
import './login.scss';

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  let history = useHistory();
  const goBack = () => history.goBack();

  const handleSubmit = async (data: any) => {
    try {
      await signIn(data);
      history.push('/home');
    } catch (error) {
      if (error.response) {
        const { errors } = error.response.data;
        const formErrors = getFieldErrors(errors);
        formRef.current?.setErrors(formErrors);
      }
    }
  };

  return (
    <div className="login-container">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Card className="card">
          <div className="header-card">
            <ArrowBackIcon className="btn-icon" onClick={goBack} />
            <h2 className="title">Login</h2>
          </div>

          <InputForm name="email" label="Email" type="email" />
          <InputForm name="password" label="Senha" type="password" />

          <Button className="btn-login" variant="contained" color="primary" type="submit">
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
