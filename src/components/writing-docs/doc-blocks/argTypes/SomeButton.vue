<template>
  <button type="button" :disabled="isDisabled">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "some-button",
  props: {
    /**
   Checks if the button should be disabled
  */
    isDisabled: {
      type: Boolean,
      default: false,
      required: true,
    },
    /**
  The display content of the button
  */
    content: {
      type: String,
      default: "One",
      required: true,
    },
  },
};
</script>
