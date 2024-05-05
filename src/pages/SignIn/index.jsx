import { Envelope, Lock  } from "@phosphor-icons/react";
import {Link} from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>APlicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha" type="password" icon={Lock} />
        <Button title="Entrar"/>

        <Link to="/register">
          Criar conta
        </Link>

      </Form>
      <Background/>
    </Container>
  );
}
