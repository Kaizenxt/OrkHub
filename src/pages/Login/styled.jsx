import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #FF69B4 0%, #DB7093 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const LoginContainer = styled.div`
  background: white;
  border-radius: 25px;
  padding: 60px 50px;
  box-shadow: 0 25px 50px rgba(255, 105, 180, 0.2);
  text-align: center;
  width: 420px;
  animation: float 3s ease-in-out infinite;
  border: 2px solid #FFB6C1;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: slideIn 0.6s ease-out;

  h1 {
    background: linear-gradient(45deg, #FF69B4, #FF1493);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 36px;
    margin-bottom: 40px;
    font-weight: 800;
    letter-spacing: 1.5px;
    position: relative;
    padding-bottom: 15px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 5px;
      background: linear-gradient(45deg, #FF69B4, #FFB6C1);
      border-radius: 3px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 25px;
  border: 2px solid #FFE4E1;
  border-radius: 15px;
  font-size: 16px;
  color: #333;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: #FFF5F7;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #FF69B4;
    background: white;
    box-shadow: 0 0 0 4px rgba(255, 105, 180, 0.15);
    transform: scale(1.02);
  }

  &::placeholder {
    color: #FFA8CB;
    font-weight: 400;
  }

  &:hover {
    border-color: #FFB6C1;
    transform: translateY(-2px);
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 10px;
  color: #FF69B4;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.button`
  background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%);
  color: white;
  border: none;
  padding: 20px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  margin-top: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 30px rgba(255, 105, 180, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  &:disabled {
    background: #FFD1DC;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const RegisterLink = styled.p`
  margin-top: 35px;
  color: #999;
  font-size: 15px;
  padding-top: 20px;
  border-top: 1px solid #FFE4E1;

  a {
    color: #FF69B4;
    text-decoration: none;
    font-weight: 700;
    margin-left: 8px;
    transition: all 0.3s;
    position: relative;
    padding: 2px 5px;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: #FF69B4;
      transition: width 0.3s;
      border-radius: 1px;
    }

    &:hover {
      color: #FF1493;
      
      &::after {
        width: 100%;
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #FF1493;
  background: #FFF0F5;
  padding: 15px;
  border-radius: 12px;
  font-size: 14px;
  margin-top: 15px;
  border: 2px solid #FFB6C1;
  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;

export const SuccessMessage = styled.div`
  color: #FF69B4;
  background: #FFF5F7;
  padding: 15px;
  border-radius: 12px;
  font-size: 14px;
  margin-top: 15px;
  border: 2px solid #FFB6C1;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;

  svg {
    color: #FF69B4;
    filter: drop-shadow(0 4px 6px rgba(255, 105, 180, 0.3));
    animation: bounce 2s infinite;

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
  margin-top: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #FF69B4;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #FF1493;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #FF69B4;
    border-radius: 4px;
  }

  a {
    color: #FF69B4;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #FF1493;
      text-decoration: underline;
    }
  }
`;

export const SocialLogin = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #FFE4E1;

  p {
    color: #999;
    margin-bottom: 15px;
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  button {
    background: white;
    border: 2px solid #FFE4E1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: #FF69B4;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);
    }
  }
`;

export const HeartAnimation = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 60px;
  height: 60px;
  animation: heartBeat 1.5s infinite;

  @keyframes heartBeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  svg {
    color: #FF69B4;
    filter: drop-shadow(0 4px 8px rgba(255, 105, 180, 0.3));
  }
`;