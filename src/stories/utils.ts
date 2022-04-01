import { Colors } from "../Colors";

export const defaultArgTypes = {
  as: {
    table: { disable: true },
  },
  theme: {
    table: { disable: true },
  },
  forwardedAs: {
    table: { disable: true },
  },
  ref: {
    table: { disable: true },
  },
};

export const colorArgType = {
  options: Object.keys(Colors),
  control: "radio",
};
