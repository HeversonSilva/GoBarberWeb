import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  console.log(profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Um e-mail carinhoso" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha velhinha"
        />
        <Input
          type="password"
          name="password"
          placeholder="Sua super nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Sua super nova senha de novo (só pra garantir)"
        />

        <button type="submit">Atualizar!</button>
      </Form>

      <button type="button">Estou cansado, quero sair</button>
    </Container>
  );
}
