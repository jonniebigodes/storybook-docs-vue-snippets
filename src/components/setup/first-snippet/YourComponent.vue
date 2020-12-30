<template>
  <div>
    <h3>{{ propertyA }}</h3>
  </div>
</template>

<script>
export default {
  name: "your-component",
  props: {
    propertyA: {
      type: String,
      default: "Boop",
    },
  },
};
</script>

<style></style>
