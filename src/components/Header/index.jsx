import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";


export function Header(){
    return (
      <Container>
          <Profile to="/profile">
            <img src="https://github.com/viniseven.png" alt="Foto de perfil do usuário" />

            <div>
                <span>Bem-Vindo,</span>
                <strong>Marcus Vinícius</strong>
            </div>
          </Profile>

          <Logout>
            <RiShutDownLine />
          </Logout>
      </Container>
    )
}