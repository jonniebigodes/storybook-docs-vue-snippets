import List from "./List.vue";
import ListItem from "./ListItem.vue";
import { Unchecked } from "./ListItem.stories";

export default {
  component: List,
  title: "Workflows/BuildPages/MultipleComponents/ListTemplate",
};

const ListTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: `
        <List v-bind="$props">
          <div v-for="item in items" :key="item.someString">
            <ListItem v-bind="$props"/>
          </div>
        </List>
      `,
});

export const EmptyListTemplate = ListTemplate.bind({});
EmptyListTemplate.args = {
  items: [],
};
export const OneitemListTemplate = ListTemplate.bind({});
OneitemListTemplate.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
