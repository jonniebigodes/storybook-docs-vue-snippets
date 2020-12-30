<template>
  <div>{{ hello }}</div>
</template>

<script>
import gql from "graphql-tag";
export const sampleQuery = gql`
  query hello {
    helloWorld
  }
`;
export default {
  name: "ComponentApollo",
  data() {
    return {
      // Initialize your apollo data
      helloWorld: "Loading...",
    };
  },
  apollo: {
    helloWorld: {
      query: sampleQuery,
    },
  },
};
</script>
