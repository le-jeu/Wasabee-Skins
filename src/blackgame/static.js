import common from "./css/common.css";
import iitc from "./css/iitc.css";
import iitcPlugins from "./css/iitc-plugins.css";
import black from "./css/black.css";

const skin = {};

skin.static = {
  CSS: {
    colorvars: common,
    iitc: iitc,
    iitcPlugins: iitcPlugins,
    black: black,
  },

  defaultOperationColor: "#cc0055",

  // link style
  linkStyle: {
    dashArray: [28,5,8,5,8,5,8,5,2,5,2,5,2,5,2,5,28,4], // iitc-show-link-direction
    assignedDashArray: [20, 6, 10, 6, 2, 6, 2, 6],
    opacity: .7,
    weight: 2.5
  },
};

export default skin;
