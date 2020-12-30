import PageLayout from "./PageLayout.vue";

export default {
  title: "Workflows/BuildPages/PageLayout",
  component: PageLayout,
};

// Be mindful when posting this in the pr (eslint did it automatically _ is used as a escape hatch)
const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageLayout },
  template: '<PageLayout v-bind="$props"></PageLayout>',
});
export const Simple = Template.bind({});
Simple.args = {
  user: "Oingo Boingo"
};
