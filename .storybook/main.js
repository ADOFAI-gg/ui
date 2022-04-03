module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    const file = (await import("../vite.config.mjs")).default;

    config.resolve = file.resolve;

    for (const plugin of file.plugins) {
      if (config.plugins.find((x) => x.name === plugin.name)) {
        continue;
      }
      config.plugins.push(plugin);
    }

    return config;
  },
};
