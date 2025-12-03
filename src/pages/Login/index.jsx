import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginContainer } from "./styled";
import { Button } from "../../components/Button";

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
        <h1>Acesse a plataforma</h1>

        <div>
          <input
            id="name"
            type="email"
            placeholder="Entre com seu email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            placeholder="Entre com sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button handleClick={handleClick}>Login</Button>
      </LoginContainer>
    </Container>
  );
}
