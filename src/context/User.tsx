import React from "react";
import { User } from "@/types";

export const UserContext = React.createContext<{
  user: User | null;
  setUser: () => void;
}>({ setUser: () => void 0, user: null });

export const useCurrentUser = () => {
  return React.useContext(UserContext).user;
};
