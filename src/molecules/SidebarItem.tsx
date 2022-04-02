import React from "react";
import { Icon } from "@/atoms";
import { Colors } from "@/Colors";
import { AnimatePresence, motion } from "framer-motion";

export const SidebarItem: React.FC<{
  label: React.ReactNode;
  icon: string;
  active: boolean;
  activate: () => void;
}> = ({ label, icon, active, activate }) => {
  return (
    <div
      style={{
        width: 72,
        height: 72,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: Colors.white,
        gap: 6,
        cursor: "pointer",
        position: "relative",
      }}
      onClick={activate}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              background: Colors.blue,
              width: 6,
              left: -3,
              height: 38,
              borderRadius: 3,
              top: 17,
            }}
          />
        )}
      </AnimatePresence>
      <Icon src={icon} size={26} />
      <span style={{ fontSize: 12, fontWeight: active ? 700 : 400 }}>
        {label}
      </span>
    </div>
  );
};
