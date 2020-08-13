// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.blank = skin;

skin.static = {
  // all CSS files listed here will be included
  // the property name does matter
  // using 'main' will disable the default css
  CSS: {
    // main: require("./main.css"), // default skin is entirely disabled
    // blank: require("./css/blank.css")
  },

  // link style
  // linkStyle: {
  //   dashArray: [5, 5, 1, 5],
  //   assignedDashArray: [4, 2, 1],
  //   opacity: 1,
  //   weight: 2
  // },
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
