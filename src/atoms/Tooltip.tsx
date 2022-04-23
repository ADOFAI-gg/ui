import React from "react";
import styled from "styled-components";
import { Colors } from "@/Colors";

const ContentContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  padding-top: 8px;
  transform: translateX(-50%);
  transition: all ease 0.2s;
`;

const Content = styled.div`
  background: ${Colors.dropdown};
  border-radius: 4px;
  overflow: hidden;
`;

const Button = styled.div``;

const Container = styled.div`
  position: relative;

  ${ContentContainer} {
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    height: 0;
  }

  ${Button}:hover + ${ContentContainer}, ${ContentContainer}:hover {
    visibility: visible;
    opacity: 1;
    height: fit-content;
  }
`;

export const Tooltip: React.FC<
  { button: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, button, ...props }) => {
  return (
    <Container>
      <Button>{button}</Button>
      <ContentContainer>
        <Content {...props}>{children}</Content>
      </ContentContainer>
    </Container>
  );
};
