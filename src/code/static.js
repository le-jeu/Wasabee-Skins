// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.thegame_svg = skin;

skin.static = {
  CSS: {
    theGameSVG: require("./css/experiments.css"),
  },
  anchorTemplate: require("!raw-loader?esModule=false!./images/marker_layer_custom.svg"),
};
