import React from "react";
import { Typography } from "@/atoms";
import styled from "styled-components";
import { FooterLinks } from "@/molecules/FooterLinks";
import { FooterLink } from "@/atoms/FooterLink";

const Container = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const FooterLinksArea: React.FC = () => {
  return (
    <Container>
      <Typography style={{ maxWidth: 360 }}>
        ADOFAI.gg는 ADOFAI 비공식 포럼을 바탕으로 하며, 7th Beat Games에서
        제작되거나 승인받지 않았습니다. 이 웹사이트는 Hanmesoft의 지원하에
        제공됩니다.
      </Typography>
      <FooterLinks title="Contact">
        <FooterLink>문의 메일 전송</FooterLink>
        <FooterLink>Discord 서버 가입</FooterLink>
      </FooterLinks>
      <FooterLinks title="법적 계약 및 정책">
        <FooterLink>법적 고지</FooterLink>
        <FooterLink>서비스 이용 약관</FooterLink>
        <FooterLink>개인정보 처리방침</FooterLink>
      </FooterLinks>
    </Container>
  );
};
