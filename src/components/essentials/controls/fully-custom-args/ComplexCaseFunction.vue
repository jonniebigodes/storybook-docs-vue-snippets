<template>
  <div>
    <h3>This is propertyA</h3>
    {{ PropertyA }}
    <h3>This is propertyB</h3>
    {{ PropertyB }}
    <h3>This is the call of the function</h3>
    {{ someProperty }}
  </div>
</template>

<script>
export default {
  name: "complex-component",
  props: {
    PropertyA: {
      type: String,
      default: "A",
    },
    PropertyB: {
      type: String,
      default: "B",
    },
    someProperty: {
      type: String,
      default: "A function call",
    },
  },
};
</script>
