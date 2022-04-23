import React from "react";
import { Avatar, Button, Typography } from "@/atoms";
import { User } from "@/types";
import { Colors } from "@/Colors";
import styled from "styled-components";
import { UserStat } from "@/molecules";

const Banner = styled.div`
  height: 72px;
  width: 100%;
  left: 0;
  top: 0;
`;

export const UserOverlayContent: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div
      style={{
        width: 256,
        position: "relative",
        paddingTop: 30,
        paddingBottom: 24,
        color: Colors.white,
      }}
    >
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar src={user.avatar} size={88} />
        <Typography style={{ marginTop: 12, fontSize: 21, fontWeight: 700 }}>
          {user.username}
        </Typography>
        {user.status && (
          <Typography
            style={{
              marginTop: 12,
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.6,
            }}
          >
            {user.status}
          </Typography>
        )}
        {user.stats && (
          <div
            style={{
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 110,
                background: "#fff",
                opacity: 0.4,
                height: 1,
              }}
            />
            <div style={{ marginTop: 16, width: 192, display: "flex" }}>
              <div style={{ flexGrow: 1 }}>
                <UserStat
                  label="Ranking"
                  value={user.stats.ranking.toLocaleString()}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <UserStat
                  label="Total PP"
                  value={user.stats.pp.toLocaleString()}
                />
              </div>
            </div>
          </div>
        )}
        <Button
          outlined
          style={{
            height: 30,
            width: 160,
            marginTop: 24,
            color: Colors.blue,
            fontWeight: 400,
          }}
          color="blue"
        >
          유저 정보 페이지로 이동
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {user.banner && (
          <Banner>
            <div
              style={{
                backgroundImage: `url(${user.banner})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Banner>
        )}
        <div style={{ flexGrow: 1, background: Colors.dropdown }} />
      </div>
    </div>
  );
};
