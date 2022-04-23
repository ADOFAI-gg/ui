import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserOverlayContent } from "@/organisms";
import { mockUser } from "@/stories/utils";

export default {
  title: "Organisms/User Overlay",
  component: UserOverlayContent,
  args: {
    user: mockUser,
  },
} as ComponentMeta<typeof UserOverlayContent>;

export const Default: ComponentStory<typeof UserOverlayContent> = (args) => (
  <UserOverlayContent {...args} />
);
