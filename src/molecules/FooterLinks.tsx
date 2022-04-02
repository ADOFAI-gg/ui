import React from "react";
import styled from "styled-components";
import { Typography } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FooterLinks: React.FC<{ title: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};
