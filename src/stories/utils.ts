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
    "https://media.discordapp.net/attachments/888733163138990091/967229646653505626/unknown.png",
  admin: false,
  stats: {
    ranking: 66236,
    pp: 20854.81,
  },
  status:
    ":NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD: :NekoD:",
};
