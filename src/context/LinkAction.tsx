import React from "react";

export const LinkActionContext = React.createContext<(to: string) => void>(
  (to) => {
    window.location.href = to;
  }
);

export const useLinkAction = () => {
  return React.useContext(LinkActionContext);
};
