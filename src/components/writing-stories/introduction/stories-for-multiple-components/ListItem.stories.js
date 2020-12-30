import ListItem from "./ListItem.vue";

export default {
  title:
    "Writing-Stories/Introduction/Stories-for-Multiple-Components/ListItem",
  component: ListItem,
};

const Template = (args, { argTypes }) => ({
  components: { ListItem },
  props: Object.keys(argTypes),
  template: '<list-item :itemProperty="itemProperty"/>',
});

export const Selected = Template.bind({});
Selected.args = {
  itemProperty: "selected",
};
export const Unselected = Template.bind({});

Unselected.args = {
  itemProperty: "unselected",
};
