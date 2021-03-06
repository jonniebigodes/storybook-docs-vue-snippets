//import Vue from "vue";
import { mount } from "@vue/test-utils";
import MyButton from "../../src/stories/Button.vue";

import { Primary } from "../../src/stories/Button.stories";

it("renders the button in the primary state", () => {
  const wrapper = mount(MyButton, {
    propsData: Primary.args,
  });
  expect(wrapper.classes()).toContain("storybook-button--primary");
});
