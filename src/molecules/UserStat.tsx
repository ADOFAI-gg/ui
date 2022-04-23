import React from "react";
import styled from "styled-components";
import { Colors } from "@/Colors";
import { Typography } from "@/atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.white};
  gap: 4px;
`;

const Label = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
`;
const Value = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
`;

export const UserStat: React.FC<{
  label: React.ReactNode;
  value: React.ReactNode;
}> = ({ label, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};
