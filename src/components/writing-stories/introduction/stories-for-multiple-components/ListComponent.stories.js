import List from "./ListComponent.vue";
import ListItem from "./ListItem.vue";

import { Selected, Unselected } from "./ListItem.stories";

export default {
  component: List,
  title: "Writing-Stories/Introduction/Stories-for-Multiple-Components/List",
};

// Always an empty list, not super interesting
const Template = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});

export const Empty = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});

export const OneItem = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"> <list-item/></list>',
});

export const ManyItems = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <list v-bind="$props">
        <list-item/>
        <list-item/>
        <list-item/>
    </list>
    `,
});

/* export const ManyItemsVueArgs = (args, { argTypes }) => {
  //console.log(`ManyItemsWithArgs args:${JSON.stringify(args, null, 2)}`);
  //console.log(`Arg types:${JSON.stringify(argTypes,null,2)}`);
  return {
    components: { List, ListItem },
    props: Object.keys(argTypes),
    template: `
      <list>
        <list-item :itemProperty="Selected"/>
        <list-item :itemProperty="Unselected"/>
        <list-item :itemProperty="Unselected"/>
      </list>
    `,
  };
}; */

/* export const ManyItemsSpreadWithArgs = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
      <list v-bind="$props">
        <list-item v-bind="$props"/>
        <list-item v-bind="$props"/>
        <list-item v-bind="$props"/>
      </list>
    `,
}); */

export const ManyItemsVueArgs = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <list v-bind="$props">
      <list-item :itemProperty="Selected"/>
      <list-item :itemProperty="Unselected"/>
      <list-item :itemProperty="Unselected"/>
    </list>
    `,
});

ManyItemsVueArgs.args = {
  Selected: Selected.args.itemProperty,
  Unselected: Unselected.args.itemProperty,
};
