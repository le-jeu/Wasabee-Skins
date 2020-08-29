// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.monospace = skin;

skin.static = {
  CSS: {
    monospace: require("./css/monospace.css"),
  },
};
