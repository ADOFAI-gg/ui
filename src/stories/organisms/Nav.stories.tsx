import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Nav from "../../organisms/Nav";
import { UserContext } from "../../context";
import { mockUser } from "../utils";

export default {
  title: "Organisms/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (props) => <Nav {...props} />;

export const Default = Template.bind({});

Default.args = {};

export const Authenticated: ComponentStory<typeof Nav> = (props) => (
  <UserContext.Provider value={{ user: mockUser, setUser: () => void 0 }}>
    <Nav {...props} />
  </UserContext.Provider>
);

export const Admin: ComponentStory<typeof Nav> = (props) => (
  <UserContext.Provider
    value={{ user: { ...mockUser, admin: true }, setUser: () => void 0 }}
  >
    <Nav {...props} />
  </UserContext.Provider>
);
