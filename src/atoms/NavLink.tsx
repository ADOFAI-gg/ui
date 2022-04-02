import React from "react";
import styled from "styled-components";
import { useLinkAction } from "@/context";

type Props = {
  to: string;
};

const Container = styled.a`
  font-size: 21px;
  font-weight: 400;
  line-height: 0;
  letter-spacing: -0.011em;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink: React.FC<Props> = ({ children, to }) => {
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
