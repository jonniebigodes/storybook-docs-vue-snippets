<template>
  <div>
    {{ orientation }}
    <div v-for="item in buttons" :key="item.label">
      {{ item.label }}
     <!--  <MyButton :label="item.label" :background="item.background" /> -->
    </div>
  </div>
</template>

<script>
//import MyButton from "./MyButton";
export default {
  name: "mybuttongroup",
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
    orientation: {
      type: String,
      default: "horizontal",
    },
  },
};
</script>

<style></style>
