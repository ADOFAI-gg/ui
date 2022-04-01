import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../..";
import { defaultArgTypes } from "../utils";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    ...defaultArgTypes,
    width: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  width: "200px",
};
