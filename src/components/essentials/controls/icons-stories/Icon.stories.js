import Icon from "./Icon.vue";

import { browser, tablet, mobile, user, watch } from "./icons";

const iconMap = { browser, tablet, mobile, user, watch };

export default {
  title: "Essentials/Controls/fully-custom-args/My Story with Icons",
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: Object.keys(iconMap)
      }
    }
  }
};

const Template = (args, { argTypes }) => {
  const oldArgs = args;
  const { icon } = oldArgs;
  const selectedIcon = iconMap[icon];
  args.icon = selectedIcon;
  return {
    props: Object.keys(argTypes),
    components: { Icon },
    template: '<Icon v-bind="$props"/>'
  };
};
export const ExampleStory = Template.bind({});

ExampleStory.args = {
  icon: "watch"
};
