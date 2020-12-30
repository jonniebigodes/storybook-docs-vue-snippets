import YourComponent from "./YourComponent.vue";

export default {
  title: "Setup/First-Story/YourComponent",
  component: YourComponent,
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YourComponent },
  template: '<your-component v-bind="$props" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  propertyA: "zoinks",
};
