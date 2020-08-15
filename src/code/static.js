// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.blackgame = skin;

skin.static = {
  // all CSS files listed here will be included
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
  // blockers style
  // selfBlockStyle: {
  //   color: "#ff1111",
  //   dashArray: [1, 5],
  //   opacity: 4,
  //   weight: 3
  // },
  // define any languages added by this skin here
  // if the language name is the same as the skin name it will be activated when the skin is selected
  strings: {
    // blank: require("./strings.json"),
  },
  // define the various colors here to override default colors
  layerTypes: new Map([])
};
