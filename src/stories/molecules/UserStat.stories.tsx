import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserStat } from "@/molecules";

export default {
  title: "Molecules/User Stat",
  component: UserStat,
  args: {
    label: "Ranking",
    value: "#123123123",
  },
} as ComponentMeta<typeof UserStat>;

export const Default: ComponentStory<typeof UserStat> = (args) => (
  <UserStat {...args} />
);
