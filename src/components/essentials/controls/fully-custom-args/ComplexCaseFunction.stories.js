import ComplexCaseFunction from "./ComplexCaseFunction.vue";

export default {
  title: "Essentials/controls/FullyCustomArgs/ComplexCase",
  component: ComplexCaseFunction,
  argTypes: {
    propertyA: {
      control: {
        type: "select",
        options: ["Item One", "Item Two", "Item Three"],
      },
    },
    propertyB: {
      control: {
        type: "select",
        options: ["Another Item One", "Another Item Two", "Another Item Three"],
      },
    },
  },
};

// a function to apply some computations
const someFunction = (valuePropertyA, valuePropertyB) => {
  return `I'm a boop ${valuePropertyA} with boop ${valuePropertyB}`;
};

const Template = (args, { argTypes }) => {
  const { propertyA, propertyB } = args;
  const someFunctionResult = someFunction(propertyA, propertyB);
  args.someProperty = someFunctionResult;
  return {
    components: { ComplexCaseFunction },
    props: Object.keys(argTypes),
    template: `<ComplexCaseFunction v-bind="$props" />`,
  };
};
export const ExampleStoryFunction = Template.bind({});
ExampleStoryFunction.args = {
  propertyA: "Aa",
  propertyB: "Bb",
};
