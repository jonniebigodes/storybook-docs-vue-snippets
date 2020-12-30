<template>
  <div>
    <h3>Hello {{ user }}</h3>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    user: {
      type: String,
      default: "N/A",
    },
  },
};
</script>

