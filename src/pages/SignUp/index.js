import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Ela deve conter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="Seu E-Mail estiloso aqui"
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha super secreta"
        />

        <button type="submit">Registrar</button>
        <Link to="/">Já tem uma conta? Entre agora mesmo!</Link>
      </Form>
    </>
  );
}
