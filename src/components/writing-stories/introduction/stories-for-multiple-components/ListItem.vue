<template>
  <div>
    <h3>i'm a item from list item</h3>
    {{ itemProperty }}
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: {
    itemProperty: {
      type: String,
      default: "nothing",
    },
  },
};
</script>

