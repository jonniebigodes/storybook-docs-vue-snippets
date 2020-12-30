<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(row, idx1) in data">
          <td v-for="(col, idx2) in row">
            {{ data[idx1][idx2] }}
          </td>
        </tr>
      </tbody>
    </table>

    {{ data }}
  </div>
</template>

<script>
export default {
  name: "my-table",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: "large",
    },
  },
};
</script>

<style></style>
