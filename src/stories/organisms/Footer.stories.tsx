import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "@/organisms";

export default {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (props) => (
  <Footer {...props} />
);

export const Default = Template.bind({});

Default.args = {
  links: false,
};

export const WithLinks = Template.bind({});

WithLinks.args = {
  links: true,
};
