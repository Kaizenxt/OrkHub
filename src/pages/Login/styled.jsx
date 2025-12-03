import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #ff8fc7 0%, #ff5db1 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LoginContainer = styled.div`
  background: #fff;
  width: 100%;
  max-width: 380px;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0px 4px 15px rgba(255, 0, 150, 0.25);
  border: 2px solid #ffb3da;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 24px;
  text-align: center;
  color: #d5008f;
  margin-bottom: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    color: #d5008f;
    font-weight: bold;
    font-family: "Trebuchet MS", Arial, sans-serif;
  }

  input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 2px solid #ffb3da;
    background: #ffe6f4;
    font-size: 14px;
    transition: 0.2s;

    &:focus {
      border-color: #ff5db1;
      outline: none;
      background: #ffd2ec;
    }

    &::placeholder {
      color: #b16191;
    }
  }
`;

export const Button = styled.button`
  background: #ff5db1;
  color: white;
  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;

  padding: 12px 18px;
  border-radius: 10px;
  border: 2px solid #ffb3da;

  cursor: pointer;
  transition: 0.2s;
  width: 100%;

  box-shadow: 0px 3px 8px rgba(255, 0, 130, 0.3);

  &:hover {
    background: #ff2f98;
  }

  &:active {
    background: #d5008f;
    transform: scale(0.98);
  }
`;
