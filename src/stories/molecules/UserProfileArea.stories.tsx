import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserProfileArea } from "@/molecules";
import { UserContext } from "@/context";
import { mockUser } from "../utils";

export default {
  title: "Molecules/User Profile Area",
  component: UserProfileArea,
} as ComponentMeta<typeof UserProfileArea>;

export const Default: ComponentStory<typeof UserProfileArea> = () => {
  return (
    <UserContext.Provider value={{ user: mockUser, setUser: () => void 0 }}>
      <UserProfileArea />
    </UserContext.Provider>
  );
};
