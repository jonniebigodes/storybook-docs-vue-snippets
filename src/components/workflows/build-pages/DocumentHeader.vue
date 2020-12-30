<template>
  <div>
    <h3>I'm a document with the following title</h3>
    {{ document.title }}
    <div>
      <h4>And have the following content</h4>
      {{ document.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentHeader",
  props: {
    document: {
      type: Object,
      default: () => ({
        title: "A document",
        content: "Lorem Ipsum",
      }),
    },
  },
};
</script>

<style></style>
