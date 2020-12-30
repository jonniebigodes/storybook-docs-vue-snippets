<template>
  <div>
    <div v-for="item in documents" :key="item.id">
      <div>
        <h3>i'm a document inside a list with the following title:</h3>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentList",
  props: {
    documents: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
