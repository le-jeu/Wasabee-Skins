// ==UserScript==
// @author        Wasabee Project Team
// @name          Wasabee Skin: Draw tools Anchors
// @category      Appearance
// @version       0.2.2
// @description   Draw tools Anchors for Wasabee
// @id            draw-tools-anchors-wasabee-skin
// @namespace     https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL     https://le-jeu.github.io/Wasabee-Skins/draw-tools-anchors-wasabee-skin.meta.js
// @downloadURL   https://le-jeu.github.io/Wasabee-Skins/draw-tools-anchors-wasabee-skin.user.js
// @match         https://intel.ingress.com/*
// @grant         none
// ==/UserScript==

var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };

info.buildName = 'wasabee-skin';
info.dateTimeVersion = '2022-10-22T18:51:09.614Z';
info.pluginId = 'draw-tools-anchors-wasabee-skin';
function wrapper(plugin_info) {

// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

var setup;
function define(fun) { setup = fun; }
define((function(){"use strict";const t={static:{anchorTemplate:'<svg>\t<symbol id="wasabee-anchor-icon" viewBox="0 0 25 41">\t\t<path d="M1.36241844765,18.67488124675 A12.5,12.5 0 1,1 23.63758155235,18.67488124675 L12.5,40.5336158073 Z" style="stroke:none;"></path> <path d="M1.80792170975,18.44788599685 A12,12 0 1,1 23.19207829025,18.44788599685 L12.5,39.432271175 Z" style="stroke:#000000; stroke-width:1px; stroke-opacity: 0.15; fill: none;"></path> <path d="M2.921679865,17.8803978722 A10.75,10.75 0 1,1 22.078320135,17.8803978722 L12.5,36.6789095943 Z" style="stroke:#ffffff; stroke-width:1.5px; stroke-opacity: 0.35; fill: none;"></path> <path d="M19.86121593215,17.25 L12.5,21.5 L5.13878406785,17.25 L5.13878406785,8.75 L12.5,4.5 L19.86121593215,8.75 Z M7.7368602792,10.25 L17.2631397208,10.25 L12.5,18.5 Z M12.5,13 L7.7368602792,10.25 M12.5,13 L17.2631397208,10.25 M12.5,13 L12.5,18.5 M19.86121593215,17.25 L16.39711431705,15.25 M5.13878406785,17.25 L8.60288568295,15.25 M12.5,4.5 L12.5,8.5" style="stroke:#ffffff; stroke-width:1.25px; stroke-opacity: 1; fill: none;"></path> </symbol> </svg>',CSS:{}}};window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={}),window.plugin.wasabeeSkins["Draw tools Anchors"]=t}));
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
  script.appendChild(document.createTextNode('//# sourceURL=iitc:///plugins/draw-tools-anchors-wasabee-skin.js'));
  (document.body || document.head || document.documentElement).appendChild(script);
} else {
  // mobile string
  wrapper(info);
}
