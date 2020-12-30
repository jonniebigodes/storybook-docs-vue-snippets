import DocumentList from "./DocumentList.vue";

export default {
  title: "Workflows/BuildPages/DocumentList",
  component: DocumentList,
};
const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DocumentList },
  template: '<DocumentList v-bind="$props" />',
});

export const Simple = Template.bind({});
Simple.args = {
  documents: [
    {
      id: 1,
      title: "Random Document 1",
      content: "Boing",
    },
    {
      id: 2,
      title: "Random Document 2",
      content: "Boing",
    },
  ],
};
