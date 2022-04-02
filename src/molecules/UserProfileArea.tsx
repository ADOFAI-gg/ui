import React from "react";
import { useCurrentUser } from "../context";
import { User } from "../types";
import Avatar from "../atoms/Avatar";

const UserProfileArea: React.FC = () => {
  const user = useCurrentUser() as User;

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar src={user.avatar} size={24} />
      <span style={{ fontSize: 14 }}>{user.username}</span>
    </div>
  );
};

export default UserProfileArea;
