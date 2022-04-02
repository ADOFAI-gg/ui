import React from "react";
import { Button } from "@/atoms";
import { Link } from "@/atoms";
import { useLinkAction } from "@/context";

const AuthNavMenu: React.FC = () => {
  const link = useLinkAction();

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Link to="/signup">Sign Up</Link>
      <Button
        width="fit-content"
        style={{
          padding: "0 16px",
          fontWeight: 500,
          color: "rgba(255, 255, 255, 60%)",
        }}
        outlined
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          link("/login");
        }}
        as="a"
        href="/login"
        variant="rounded"
      >
        Log In
      </Button>
    </div>
  );
};

export default AuthNavMenu;
