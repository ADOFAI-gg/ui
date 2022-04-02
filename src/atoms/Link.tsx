import React from "react";
import styled from "styled-components";
import { useLinkAction } from "@/context";

type Props = {
  to: string;
};

const Container = styled.a`
  --opacity: 0.6;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.011em;
  color: rgba(255, 255, 255, var(--opacity));
  text-decoration: none;
  transition: all ease 0.2s;
  &:hover {
    --opacity: 0.8;
  }
`;

export const Link: React.FC<Props> = ({ children, to }) => {
  const link = useLinkAction();

  return (
    <Container
      href={to}
      onClick={(e) => {
        e.preventDefault();
        link(to);
      }}
    >
      {children}
    </Container>
  );
};
