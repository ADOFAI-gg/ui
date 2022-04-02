import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@/atoms";
import { colorArgType, defaultArgTypes } from "../utils";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    ...defaultArgTypes,
    width: {
      type: "string",
    },
    color: colorArgType,
    variant: {
      table: {
        disable: true,
      },
    },
    outlined: {
      type: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const Default = Template.bind({});

export const Rounded = Template.bind({});

Rounded.args = {
  children: "Button",
  width: "100px",
  color: "white",
  variant: "rounded",
};

Default.args = {
  children: "Button",
  width: "200px",
  color: "white",
};
