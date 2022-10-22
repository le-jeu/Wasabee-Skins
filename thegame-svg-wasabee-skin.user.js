// ==UserScript==
// @author        Wasabee Project Team
// @name          Wasabee Skin: TheGame
// @category      Appearance
// @version       0.2.3
// @description   Google-like Anchor for Wasabee
// @id            thegame-svg-wasabee-skin
// @namespace     https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL     https://le-jeu.github.io/Wasabee-Skins/thegame-svg-wasabee-skin.meta.js
// @downloadURL   https://le-jeu.github.io/Wasabee-Skins/thegame-svg-wasabee-skin.user.js
// @match         https://intel.ingress.com/*
// @grant         none
// ==/UserScript==

var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };

info.buildName = 'wasabee-skin';
info.dateTimeVersion = '2022-10-22T18:51:09.616Z';
info.pluginId = 'thegame-svg-wasabee-skin';
function wrapper(plugin_info) {

// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

var setup;
function define(fun) { setup = fun; }
define((function(){"use strict";const e={static:{anchorTemplate:'<svg>\t<symbol id="wasabee-anchor-icon" viewBox="0 0 25 41">\t\t<mask id="hole">\t    <rect width="100%" height="100%" fill="white"/> <circle cx="12" cy="10" r="4.5" fill="black"/> </mask> <g mask="url(#hole)" style="stroke:black;stroke-linejoin:round">\t\t  <path d="M 2,10 A 10,10,0,0,1,22,10 C 22,20, 12,20, 12,40 C 12,20, 2,20, 2,10"/> <circle cx="12" cy="10" r="4.5"/> </g> </symbol> </svg>',CSS:{}}};window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={}),window.plugin.wasabeeSkins.TheGame=e}));
if(!window.bootPlugins) window.bootPlugins = [];
window.bootPlugins.push(setup);
// if IITC has already booted, immediately run the 'setup' function
if(window.iitcLoaded && typeof setup === 'function') setup();
setup.info = plugin_info; //add the script info data to the function as a property
}

// inject code into site context
var script = document.createElement('script');
// if on last IITC mobile, will be replaced by wrapper(info)
var mobile = `script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);`;
// detect if mobile
if (mobile.startsWith('script')) {
  script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
  script.appendChild(document.createTextNode('//# sourceURL=iitc:///plugins/thegame-svg-wasabee-skin.js'));
  (document.body || document.head || document.documentElement).appendChild(script);
} else {
  // mobile string
  wrapper(info);
}
