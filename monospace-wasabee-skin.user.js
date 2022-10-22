// ==UserScript==
// @author        Wasabee Project Team
// @name          Wasabee Skin: Monospace
// @category      Appearance
// @version       0.2.1
// @description   Monospace for IITC&Wasabee
// @id            monospace-wasabee-skin
// @namespace     https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL     https://le-jeu.github.io/Wasabee-Skins/monospace-wasabee-skin.meta.js
// @downloadURL   https://le-jeu.github.io/Wasabee-Skins/monospace-wasabee-skin.user.js
// @match         https://intel.ingress.com/*
// @grant         none
// ==/UserScript==

var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };

info.buildName = 'wasabee-skin';
info.dateTimeVersion = '2022-10-22T18:51:09.615Z';
info.pluginId = 'monospace-wasabee-skin';
function wrapper(plugin_info) {

// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

var setup;
function define(fun) { setup = fun; }
define((function(){"use strict";const t={static:{CSS:{monospace:"#map,body,button{font-family:monospace,Roboto,Helvetica Neue,Helvetica,sans-serif}body{font-size:12px}button{font-size:13px}h2 #name{width:185px}#chat td:first-child,#chatinput td:first-child{font-size:12px}#updatestatus{font-size:11px}#bookmarksBox *{font-family:monospace}"}}};window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={}),window.plugin.wasabeeSkins.Monospace=t}));
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
  script.appendChild(document.createTextNode('//# sourceURL=iitc:///plugins/monospace-wasabee-skin.js'));
  (document.body || document.head || document.documentElement).appendChild(script);
} else {
  // mobile string
  wrapper(info);
}
