import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Container } from "@/atoms";
import React from "react";

export default {
  title: "Atoms/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = () => (
  <Container>
    <div style={{ background: "#fff", width: "100%", height: 24 }} />
  </Container>
);
