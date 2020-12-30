import SomeButton from "./SomeButton.vue";

export default {
  title: "Writing-Docs/DocBlocs/ArgTypes/SomeButton",
  component: SomeButton,
};

const Template = (args, { argTypes }) => ({
  components: { SomeButton },
  props: Object.keys(argTypes),
  template: '<some-button v-bind="$props"/>',
});

export const Boop = Template.bind({})