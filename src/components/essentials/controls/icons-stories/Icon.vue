<template>
  <svg viewBox="0 0 1024 1024" width="20px" height="20px">
    <path :d="icon" />
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
