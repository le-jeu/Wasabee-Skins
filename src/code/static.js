// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.wasabee_fix = skin;

skin.static = {
  CSS: {
    fix: require("./css/experiments.css"),
    jqueryResizable: require("./css/jqueryResizable.css"),
  },
};

