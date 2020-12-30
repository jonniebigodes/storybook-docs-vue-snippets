import MyButton from "./MyButton.vue";

export default {
  title: "Writing-Stories/Introduction/UsingArgs/Components/Button",
  component: MyButton,
  background: { control: "color" }
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: '<my-button :background="background" :label="label" />',
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
