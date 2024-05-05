import { ArrowLeft, User, Envelope, Lock, Camera  } from "@phosphor-icons/react";
import {Link} from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
            <img src="https://github.com/fernandoreimbergdev.png" alt="Foto do úsuario" />

            <label htmlFor="avatar">
                <Camera />
                <input id="avatar" type="file"/>
            </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha Atual" type="password" icon={Lock} />
        <Input placeholder="Nova senha" type="password" icon={Lock} />
        <Button title="Salvar"/>

      </Form>
    </Container>
  );
}
