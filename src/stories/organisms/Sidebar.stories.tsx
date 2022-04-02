import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "@/organisms";

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (props) => (
  <Sidebar {...props} />
);

export const Default = Template.bind({});
