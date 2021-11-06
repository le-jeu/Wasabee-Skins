// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.wasabee_fix = skin;

skin.static = {
  CSS: {
    fix: require("./css/experiments.css"),
    verticalToolBar: require("./css/verticalActions.css"),
    jqueryResizable: require("./css/jqueryResizable.css"),
  },
};

if (window.plugin.wasabee && window.plugin.wasabee.info.version < "0.19") {
	skin.static.CSS.fixToolbarOffset = require("./css/fixToolbarOffset018.css");
}
