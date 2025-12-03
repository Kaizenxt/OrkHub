import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 6px 14px;
  width: 250px;
  border: 1px solid #e0d9ff;
  box-shadow: 0px 2px 4px #dcd4ff94;
  transition: 0.2s;

  &:focus-within {
    border-color: #b389ff;
    box-shadow: 0px 2px 6px #c9b3ff;
  }
`;

export const IconArea = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 15px;
  color: #5e5a85;

  &::placeholder {
    color: #a49bcf;
  }
`;
