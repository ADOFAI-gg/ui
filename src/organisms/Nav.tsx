import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.svg";
import AuthNavMenu from "../molecules/AuthNavMenu";
import { Icon, NavLink } from "../atoms";
import ArrowDown from "../assets/icons/ArrowDown.svg";
import Manage from "../assets/icons/Manage.svg";
import { useCurrentUser, useLinkAction } from "../context";
import UserProfileArea from "../molecules/UserProfileArea";

const Container = styled.nav`
  color: #fff;
  background: rgba(0, 0, 0, 25%);
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  display: flex;
  position: relative;
  gap: 16px;
`;

const Logo = styled.a`
  background: url("${LogoImg}");
  background-size: cover;
  width: 139px;
  height: 20px;
  cursor: pointer;
`;

export const Nav: React.FC = () => {
  const link = useLinkAction();
  const user = useCurrentUser();

  return (
    <Container>
      <Logo onClick={() => link("/")} />
      <div
        style={{
          display: "flex",
          gap: 40,
          justifyContent: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <NavLink to="/levels">Levels</NavLink>
        <NavLink to="/ranking">Rankings</NavLink>
      </div>
      <div style={{ flexGrow: 1 }} />
      {user ? <UserProfileArea /> : <AuthNavMenu />}
      <div
        style={{ width: 1, height: 18, background: "rgba(255, 255, 255, 0.4)" }}
      />
      {user?.admin && (
        <Icon
          src={Manage}
          onClick={() => link("/admin")}
          size={16}
          style={{ cursor: "pointer" }}
        />
      )}
      <Icon style={{ cursor: "pointer" }} src={ArrowDown} size={16} />
    </Container>
  );
};
