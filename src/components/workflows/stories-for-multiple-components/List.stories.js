import List from "./List.vue";
import ListItem from "./ListItem.vue";
import { Unchecked } from "./ListItem.stories";

export default {
  component: List,
  subcomponents: { ListItem },
  title: "Workflow/MultipleComponents/List",
};

export const Empty = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<List v-bind="$props"/>',
});

export const OneItem = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: '<List v-bind="$props"><ListItem v-bind="$props"/></List>',
});
OneItem.args = {
  someString: "Wololo",
  someNumber: 233,
};

export const OneItemSubStories = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: '<List v-bind="$props"></List>',
});
OneItemSubStories.args = {
  children: '<ListItem v-bind="$props"/>',
  ...Unchecked.args,
};

/* export const OneItemWithChildren = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<List v-bind="$props"/>',
});
OneItemWithChildren.args = {
  children: '<ListItem v-bind="$props"/>',
}; */

/* const ListTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: `
    <List v-bind="$props">
      <div v-for="item in items" :key="item.someString">
        <h3>ssss</h3>
      </div>
    </List>
  `,
}); */

export const OneItemReuse = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: '<List v-bind="$props"><ListItem v-bind="$props"/></List>',
});
OneItemReuse.args = {
  ...Unchecked.args,
};
