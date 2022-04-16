import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DifficultyIcon } from "@/atoms";

export default {
  title: "Atoms/Difficulty Icon",
  component: DifficultyIcon,
  args: {
    difficulty: 20,
    size: 48,
  },
} as ComponentMeta<typeof DifficultyIcon>;

export const Default: ComponentStory<typeof DifficultyIcon> = (props) => {
  return <DifficultyIcon {...props} />;
};
