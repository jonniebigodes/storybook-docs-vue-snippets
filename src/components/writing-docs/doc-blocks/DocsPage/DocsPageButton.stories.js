import SampleButton from "./DocsPageButton";

export default {
  title: "Writing-Docs/DocBlocs/DocsPage",
  component: SampleButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const someFunction = someValue => {
  return `i am a ${someValue}`;
};

export const ExampleStory = (args, { argTypes }) => {
  const oldArgs = args;
  const { label } = oldArgs;
  const functionResult = someFunction(label);
  args.label = functionResult;
  return {
    props: Object.keys(argTypes),
    components: { SampleButton },
    template: '<SampleButton v-bind="$props" />',
  };
};
ExampleStory.args = {
  primary: true,
  size: "small",
  label: "button",
};