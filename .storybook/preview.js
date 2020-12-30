// setup/Component Context

import { ThemeProvider } from "vue-styled-components";
//export const decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];

export const decorators = [
  (story) => ({
    components: {
      "theme-provider": ThemeProvider,
    },
    template: `<theme-provider :theme="{
    primary: 'palevioletred',
    secondary: 'papayawhip',
    tertiary: 'lavenderblush'
  }"><story/></theme-provider>`,
  }),
];

/* export const decorators = [
  () => {
    return {
      components: {
        "theme-provider": ThemeProvider,
      },
      template: `<theme-provider :theme="{
      primary: 'palevioletred',
      secondary: 'papayawhip',
      tertiary: 'lavenderblush'
    }"><story/></theme-provider>`,
    };
  },
]; */

/* import fetch from 'node-fetch';

export const loaders = [
  async () => ({
    currentUser: (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
  }),
]; */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
