// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.blank = skin;

skin.static = {
  // all CSS files listed here will be included
  // the property name does matter
  // if a name is also present if another enabled skin, the latest in the skin list will overide it
  // using 'main' will disable the default css
  CSS: {
    // main: require("./main.css"), // default skin is entirely disabled
    // blank: require("./css/blank.css")
  },

  // Anchor template for custom colored anchor
  // To customize the icon, create a svg icon with schema:
  // <svg>
  //   <symbol id="wasabee-anchor-icon" viewBox="0 0 25 41">
  //     <...drawing...>
  //   </symbol>
  // </svg>
  // and set anchorTemplate to this svg as string.
  // To disable this feature and use the same icon whatever the color, set anchorTemplate to `false`
  // and define your icon in your style files :
  // .wasabee-anchor-icon {
  //   background-image: url(./images/your_anchor_icon)
  // }
  // Examples:
  // anchorTemplate: false,
  // anchorTemplate: '<svg><symbol id="wasabee-anchor-icon" viewBox="0 0 25 41"><path d="M 12,41 L 0,0 L 25,0 Z"/></symbol></svg>'
  // anchorTemplate: require('!raw-loader?esModule=false!./images/template_anchor.svg'),


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
  // strings: {
  //    blank: require("./strings.json"),
  // },
  // define the various colors here to override default colors
  // layerTypes: layerTypes = new Map([
  //   [
  //     "main",
  //     {
  //       name: "main",
  //       displayName: "Red",
  //       color: "#ff0000",
  //     },
  //   ],
  //   [
  //     "groupa",
  //     {
  //       name: "groupa",
  //       displayName: "Orange",
  //       color: "#ff6600",
  //     },
  //   ],
  //   [
  //     "groupb",
  //     {
  //       name: "groupb",
  //       displayName: "Light Orange",
  //       color: "#ff9900",
  //     },
  //   ],
  //   [
  //     "groupc",
  //     {
  //       name: "groupc",
  //       displayName: "Tan",
  //       color: "#bb9900",
  //     },
  //   ],
  //   [
  //     "groupd",
  //     {
  //       name: "groupd",
  //       displayName: "Purple",
  //       color: "#bb22cc",
  //     },
  //   ],
  //   [
  //     "groupe",
  //     {
  //       name: "groupe",
  //       displayName: "Teal",
  //       color: "#33cccc",
  //     },
  //   ],
  //   [
  //     "groupf",
  //     {
  //       name: "groupf",
  //       displayName: "Pink",
  //       color: "#ff55ff",
  //     },
  //   ],
  // ])
};
