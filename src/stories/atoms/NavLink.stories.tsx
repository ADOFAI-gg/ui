import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavLink } from "@/atoms";

export default {
  title: "Atoms/Nav Link",
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

export const Default: ComponentStory<typeof NavLink> = (props) => (
  <NavLink {...props} />
);

Default.args = {
  to: "/test",
  children: "Hello",
};
