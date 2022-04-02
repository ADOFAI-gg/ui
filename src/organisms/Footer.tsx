import React from "react";
import { Container, Typography } from "../atoms";
import { Colors, ColorUtils } from "../Colors";
import { FooterLinksArea } from "./FooterLinksArea";

export const Footer: React.FC<{ links?: boolean }> = ({ links = true }) => {
  return (
    <div
      style={{
        color: Colors.white,
        background: ColorUtils.withOpacity(Colors.black, 0.2),
        paddingTop: 24,
        paddingBottom: 28,
      }}
    >
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Typography style={{ fontSize: 21, fontWeight: 700 }}>
            ADOFAI.gg
          </Typography>
          {links && <FooterLinksArea />}
          <Typography
            style={{
              color: ColorUtils.withOpacity(Colors.white, 0.6),
              fontSize: 14,
            }}
          >
            © 2022. ADOFAI.gg Development Team. 이 사이트에 대한 디자인(타사
            제공 이미지, 폰트 제외)과 아이콘, 소스 코드(라이브러리 제외)에 대한
            모든 권리 보유.
          </Typography>
        </div>
      </Container>
    </div>
  );
};
