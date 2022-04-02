import React from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <div style={{ paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
        {children}
      </div>
    </div>
  );
};
