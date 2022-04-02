import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Colors } from "../Colors";

export const Layout: React.FC<{ type?: "default" }> = ({ type, children }) => {
  switch (type) {
    case "default":
    default:
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            color: Colors.white,
          }}
        >
          <Nav />
          <div style={{ flexGrow: 1 }}>{children}</div>
          <Footer />
        </div>
      );
  }
};
