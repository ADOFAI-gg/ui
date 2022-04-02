import styled, { css } from "styled-components";
import { Colors, ColorUtils } from "@/Colors";

export const Button = styled.button<{
  width?: string;
  color?: keyof typeof Colors;
  variant?: "rounded" | "default";
  outlined?: boolean;
}>`
  --button-opacity: 20%;

  height: 42px;
  background: ${({ color = "white" }) =>
    ColorUtils.withOpacityVariable(Colors[color], "button-opacity")};
  cursor: pointer;
  font-weight: 700;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 80%);
  border-radius: 5px;
  text-decoration: none;
  width: ${({ width }) => width ?? "100%"};
  transition: all ease 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ outlined, color = "white" }) => {
    return outlined
      ? css`
          background: transparent;

          border-width: 1px;

          border-style: solid;

          border-color: ${ColorUtils.withOpacityVariable(
            Colors[color],
            "button-opacity"
          )};
        `
      : "";
  }}

  ${({ variant = "default" }) => {
    switch (variant) {
      case "rounded":
        return css`
          height: 32px;
          border-radius: 16px;
        `;
      default:
        return "";
    }
  }}

  &:hover {
    --button-opacity: 30%;
  }

  &:active {
    --button-opacity: 40%;
  }
`;
