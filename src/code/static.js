// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.blackgame = skin;

skin.static = {
  CSS: {
    colorvars: require("./css/common.css"),
    iitc: require("./css/iitc.css"),
    iitcPlugins: require("./css/iitc-plugins.css"),
    black: require("./css/black.css"),
    fix: require("./css/experiments.css")
  },

  // link style
  linkStyle: {
    dashArray: [28,5,8,5,8,5,8,5,2,5,2,5,2,5,2,5,28,4], // iitc-show-link-direction
    assignedDashArray: [20, 6, 10, 6, 2, 6, 2, 6],
    opacity: .7,
    weight: 2.5
  },
};
