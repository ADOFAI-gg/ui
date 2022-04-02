import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavLink } from "../../atoms";
import AuthNavMenu from "../../molecules/AuthNavMenu";

export default {
  title: "Molecules/Auth Nav Menu",
  component: NavLink,
} as ComponentMeta<typeof AuthNavMenu>;

export const Default: ComponentStory<typeof AuthNavMenu> = (props) => (
  <AuthNavMenu {...props} />
);
