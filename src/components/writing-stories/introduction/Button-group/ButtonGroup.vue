<template>
  <div>
    <h3>I'm on orientation:{{ orientation }}</h3>
    <h4>Have the following buttons</h4>
    <div v-for="item in buttons">
      <my-button @onClick="onClick" v-bind="$props" />
    </div>
  </div>
</template>

<script>
import MyButton from "../../../../stories/Button";
export default {
  name: "ButtonGroup",
  components: { MyButton },
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
    orientation: {
      type: String,
      default: "vertical",
    },
  },
};
</script>

<style></style>
