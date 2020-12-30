import YourComponentStyled from "./YourComponent-Styled.vue";

export default {
  title: "Setup/First-Story/YourComponentStyled",
  component: YourComponentStyled,
  argTypes: {
    dynColor: { control: "color" },
    dynBgc: { control: "color" },
  },
};
const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YourComponentStyled },
  template: '<my-styled-component @onClick="onClick" v-bind="$props" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  dynColor: "#ffffff",
  dynBr: 10,
  dynPad: 15,
  dynBgc: "#4ABB00",
};
