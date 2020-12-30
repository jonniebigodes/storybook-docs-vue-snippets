import TodoItem from "./Todo-Item.vue";
import fetch from "node-fetch";

export default {
  title: "Writing-Stories/Loaders/Todo (Not working needs additional research",
  component: TodoItem,
};

export const Primary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoItem },
  template: '<todo-item v-bind="$props" />',
});

Primary.loaders = [
  async () => ({
    todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
  }),
];


export const LoadedCurrentUser = (args, { argTypes }) => {
  console.log(`Loaded Current:${JSON.stringify(args, null, 2)}`);
  return {
    props: Object.keys(argTypes),
    components: { TodoItem },
    template: "<todo-item />",
  };
};
LoadedCurrentUser.loaders = [
    async () => ({
      todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
    }),
  ];