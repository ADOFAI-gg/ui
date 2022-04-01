import styled from "styled-components";

export const Button = styled.button<{ width?: string }>`
  --button-opacity: 20%;

  height: 42px;
  background: rgba(255, 255, 255, var(--button-opacity));
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  width: ${({ width }) => width ?? "100%"};
  transition: all ease 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    --button-opacity: 30%;
  }

  &:active {
    --button-opacity: 40%;
  }
`;
