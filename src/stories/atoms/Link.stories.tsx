import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "../../atoms/Link";

export default {
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = (props) => (
  <Link {...props} />
);

Default.args = {
  to: "/hello",
  children: "Hello",
};
