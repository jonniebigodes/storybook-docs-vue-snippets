import ListItem from "./ListItem.vue";

export default {
  title: "Workflows/BuildPages/MultipleComponents/ListItem",
  component: ListItem,
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListItem },
  template: '<ListItem v-bind="$props"/>',
});

export const SomeStory = Template.bind({});
SomeStory.args = {
  someString: "Wololo",
  someNumber: 233,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  someString: "Unchecked",
  someNumber: 233,
};
