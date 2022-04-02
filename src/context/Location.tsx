import React from "react";

export const LocationContext = React.createContext<{ pathname: string }>(
  window.location
);

export const useLocation = () => {
  return React.useContext(LocationContext);
};
