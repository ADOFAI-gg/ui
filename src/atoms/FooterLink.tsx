import React from "react";
import styled from "styled-components";
import { useLinkAction } from "@/context";

const Container = styled.a`
  font-size: 14px;
  opacity: 80%;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
`;

export const FooterLink: React.FC<{ to?: string; internal?: boolean }> = ({
  to,
  children,
  internal = false,
}) => {
  const link = useLinkAction();

  return (
    <Container
      href={to}
      onClick={(e) => {
        if (!internal || !to) return;
        e.preventDefault();
        link(to);
      }}
    >
      › {children}
    </Container>
  );
};
