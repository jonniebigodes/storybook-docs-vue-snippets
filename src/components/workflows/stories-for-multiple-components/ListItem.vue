<template>
  <div>
    <h2>I'm a listItem</h2>
    <h3>I have the following string</h3>
    {{ someString }}
    <h3>I have the following number</h3>
    {{ someNumber }}
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    someString: {
      type: String,
      default: "Some String",
    },
    someNumber: {
      type: Number,
      default: 2501,
    },
  },
};
</script>
