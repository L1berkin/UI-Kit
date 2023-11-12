import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    },
  },
  docs: {
    autodocs: "tag",
  },
  // webpackFinal: async (config: any) => {
  //   // Add path aliases
  //   config.resolve.alias["@"] = path.resolve(__dirname, "../");
  //
  //   return config;
  // },
};
export default config;
