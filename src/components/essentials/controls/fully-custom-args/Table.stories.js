import Table from "./Table.vue";

export default {
  title: "Essentials/controls/FullyCustomArgs/Table",
  component: Table,
};

// leave in only tr and td all other items are not required(div,table,tbody,{{ data }})
const TableStory = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `<div>
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
  </div>`,
});
export const Numeric = TableStory.bind({});
Numeric.args = {
  data: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  size: "large",
};
