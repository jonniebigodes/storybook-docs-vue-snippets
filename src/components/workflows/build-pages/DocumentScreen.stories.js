import DocumentScreen from "./DocumentScreen.vue";
//import * as TaskStories from './Task.stories';
import * as PageLayoutStories from './PageLayout.stories';
import * as DocumentHeaderStories from "./DocumentHeader.stories";
import * as DocumentListStories from './DocumentList.stories';
export default {
  title: "Workflows/BuildPages/DocumentScreen",
  component: DocumentScreen,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DocumentScreen },
  template: '<DocumentScreen v-bind="$props"/>',
});
export const SimpleDocumentScreen = Template.bind({});
SimpleDocumentScreen.args = {
  user: PageLayoutStories.Simple.args.user,
  document: DocumentHeaderStories.Simple.args.document,
  subdocuments: DocumentListStories.Simple.args.documents,
};