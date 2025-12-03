import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginContainer,
  InputGroup,
  Title,
  Button
} from "./styled";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleClick() {
    if (!username || !password) {
      alert("Insira username e senha válidos!");
      return;
    }
    navigate("/home");
  }

  return (
    <Container>
      <LoginContainer>
        <Title>Acesse a plataforma</Title>

        <InputGroup>
          <label htmlFor="name">Email</label>
          <input
            id="name"
            type="email"
            placeholder="Entre com seu email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Entre com sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <Button onClick={handleClick}>Login</Button>
      </LoginContainer>
    </Container>
  );
}
