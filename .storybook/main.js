module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
   // "../src/components/**/*.stories.js"
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //'storybook-addon-apollo-client',
  ]
}