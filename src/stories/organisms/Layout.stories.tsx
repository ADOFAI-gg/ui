import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Layout } from "@/organisms";
import React from "react";

export default {
  title: "Organisms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      options: ["default", "admin"],
      control: "radio",
    },
  },
  args: {
    children: "Hello",
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (props) => (
  <Layout {...props} />
);

export const Default = Template.bind({});

export const Admin = Template.bind({});

Admin.args = {
  type: "admin",
};
