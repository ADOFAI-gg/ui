import React from "react";
import { Colors } from "@/Colors";
import { SidebarItem } from "@/molecules/SidebarItem";
import { Icon } from "@/atoms";

export const Sidebar: React.FC = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        width: 72,
        background: Colors.darkBlue,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SidebarItem label="레벨 관리" icon={<Icon src="" />} />
    </div>
  );
};
