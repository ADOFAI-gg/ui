import { addons } from "@storybook/addons";
import { create, themes } from "@storybook/theming";

addons.setConfig({
  theme: create({
    ...themes.dark,
    brandImage:
      "https://cdn.discordapp.com/attachments/888733163138990091/959679439443206184/unknown.png",
  }),
});
