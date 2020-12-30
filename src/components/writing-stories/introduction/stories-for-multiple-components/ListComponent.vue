<template>
  <div>
    <h3>i'm a list</h3>
    <slot />
  </div>
</template>

<script>

export default {
  name: "list",
  props: {
    someData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
