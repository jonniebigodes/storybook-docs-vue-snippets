import ButtonGroup from "./ButtonGroup";
import * as ButtonStories from "./MyButton.stories";

export default {
  title: "Writing-Stories/Introduction/UsingArgs/Components/ButtonGroup",
  component: ButtonGroup,
};

const Template = (args, { argTypes }) => ({
  components: { ButtonGroup },
  props: Object.keys(argTypes),
  template: '<ButtonGroup v-bind="$props" />',
});

/* function Template(args, { argTypes }) {
  console.log(`These are the args:${JSON.stringify(args)}`);
  console.log(`These are the argTypes:${JSON.stringify(argTypes, null, 2)}`);
  return {
    components: { ButtonGroup },
    props: Object.keys(argTypes),
    template: '<ButtonGroup v-bind="$props" />',
  };
} */

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: "horizontal"
};
