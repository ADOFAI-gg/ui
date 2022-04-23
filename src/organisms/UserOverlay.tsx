import React from "react";
import { User } from "@/types";
import { Tooltip } from "@/atoms";
import { UserOverlayContent } from "@/organisms/UserOverlayContent";

export const UserOverlay: React.FC<{ user: User; button: React.ReactNode }> = ({
  user,
  button,
}) => {
  return (
    <Tooltip button={button} style={{ background: "transparent" }}>
      <UserOverlayContent user={user} />
    </Tooltip>
  );
};
