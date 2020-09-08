// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.draw_tools_anchors = skin;

skin.static = {
  CSS: {
    drawToolsAnchors: require("./css/experiments.css"),
  },
};
