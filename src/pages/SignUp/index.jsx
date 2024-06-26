import { Envelope, Lock, User } from "@phosphor-icons/react";
import {Link} from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>APlicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha" type="password" icon={Lock} />
        <Button title="Cadastrar" />

        
        <Link to="/">
          Voltar para o Login
        </Link>
      </Form>
    </Container>
  );
}
