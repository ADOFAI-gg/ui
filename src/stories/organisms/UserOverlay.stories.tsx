import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserOverlay } from "@/organisms";
import { Button } from "@/atoms";
import { mockUser } from "@/stories/utils";

export default {
  title: "Organisms/User Overlay",
  component: UserOverlay,
  args: {
    user: mockUser,
  },
} as ComponentMeta<typeof UserOverlay>;

export const Default: ComponentStory<typeof UserOverlay> = (args) => (
  <UserOverlay
    {...args}
    button={<Button style={{ height: 30 }}>Hover me</Button>}
  />
);
