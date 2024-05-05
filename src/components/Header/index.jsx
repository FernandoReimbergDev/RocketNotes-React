import { Power } from "@phosphor-icons/react";


import { Container, Profile, Logout } from "./style";

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/fernandoreimbergdev.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Luiz Fernando R.</strong>
                </div>
            </Profile>

            <Logout>
                <Power />
            </Logout>

        </Container>
    )
}