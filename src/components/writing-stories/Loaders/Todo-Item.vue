<template>
  <div>
    <div>
      <h2>todo Loaders ahoy</h2>
      <pre><code>{{todo}}</code></pre>
    </div>
    <div>
      <h2>currentUser Loaders ahoy</h2>
      <pre><code>{{currentUser}}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    currentUser: {
      type: Object,
      default: () => ({
        userId: 22,
        id: 22,
        title: "One",
        completed: true,
      }),
    },
    todo: {
      type: Object,
      default: () => ({
        userID: 1337,
        id: 1337,
        title: "Zoink",
        completed: false,
      }),
    },
  },
};
</script>
