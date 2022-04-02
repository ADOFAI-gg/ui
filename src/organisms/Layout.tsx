import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Colors } from "@/Colors";
import { Sidebar } from "./Sidebar";

export const Layout: React.FC<{ type?: "default" | "admin" }> = ({
  type,
  children,
}) => {
  switch (type) {
    case "admin":
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            color: Colors.white,
          }}
        >
          <Nav />
          <div style={{ flexGrow: 1, display: "flex" }}>
            <Sidebar />
            <div
              style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <div style={{ flexGrow: 1 }}>{children}</div>
              <Footer links={false} />
            </div>
          </div>
        </div>
      );
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
