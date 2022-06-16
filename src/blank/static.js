// import mainCSS from "./main.css"
// import blankCSS from "./blank.css"
// import anchorIcon from "./images/template_anchor.svg"
// import blankStrings from "./strings.json";

const skin = {};

skin.static = {
  // all CSS files listed here will be included
  // the property name does matter
  // if a name is also present if another enabled skin, the latest in the skin list will overide it
  // using 'main' will disable the default css
  CSS: {
    // main: mainCSS, // default skin is entirely disabled
    // blank: blankCSS
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
  // anchorTemplate: anchorIcon, // from import


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
  //    Blank: blankStrings // from imports,
  // },
};

export default skin;