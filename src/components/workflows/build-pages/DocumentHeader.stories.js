import DocumentHeader from "./DocumentHeader.vue";

export default {
  title: "Workflows/BuildPages/DocumentHeader",
  component: DocumentHeader,
};
const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DocumentHeader },
  template: '<DocumentHeader v-bind="$props" />',
});

export const Simple = Template.bind({});
Simple.args = {
  document: {
    title: "Random Document",
    content: "Boing",
  },
};
