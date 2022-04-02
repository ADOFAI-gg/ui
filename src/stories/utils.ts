import { Colors } from "@/Colors";
import { User } from "@/types";

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

export const mockUser: User = {
  id: "ganjang",
  avatar:
    "https://cdn.discordapp.com/attachments/888733163138990091/959655737938821160/unknown.png",
  username: "GanjangFactory",
  banner:
    "https://cdn.discordapp.com/attachments/888733163138990091/959655737938821160/unknown.png",
  admin: false,
};
