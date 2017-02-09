import transformSyntaxFlow from "babel-plugin-syntax-flow";
import transformFlowStripTypes from "babel-plugin-transform-flow-strip-types";

export default {
  plugins: [
    transformSyntaxFlow,
    transformFlowStripTypes
  ]
};
