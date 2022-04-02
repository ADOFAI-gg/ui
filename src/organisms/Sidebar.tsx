import React from "react";
import { Colors } from "@/Colors";
import { SidebarItem } from "@/molecules/SidebarItem";
import List from "@/assets/icons/List.svg";
import Plane from "@/assets/icons/Plane.svg";
import Check from "@/assets/icons/Check.svg";
import Statistics from "@/assets/icons/Statistics.svg";
import { useLocation } from "@/context/Location";
import { useLinkAction } from "@/context";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const link = useLinkAction();

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
      <SidebarItem
        activate={() => link("/admin/levels")}
        active={location.pathname.startsWith("/admin/levels")}
        label="레벨 관리"
        icon={List}
      />
      <SidebarItem
        activate={() => link("/admin/requests")}
        active={location.pathname.startsWith("/admin/requests")}
        label="등재 신청"
        icon={Statistics}
      />
      <SidebarItem
        activate={() => link("/admin/rate")}
        active={location.pathname.startsWith("/admin/rate")}
        label="레벨 책정"
        icon={Check}
      />
      <SidebarItem
        activate={() => link("/admin/rate")}
        active={location.pathname.startsWith("/admin/rate")}
        label="통계"
        icon={Statistics}
      />
    </div>
  );
};
