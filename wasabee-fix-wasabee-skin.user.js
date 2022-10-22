// ==UserScript==
// @author        Wasabee Project Team
// @name          Wasabee Skin: Early fix
// @category      Appearance
// @version       0.2.1
// @description   Some UI fix and experiments for Wasabee
// @id            wasabee-fix-wasabee-skin
// @namespace     https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL     https://le-jeu.github.io/Wasabee-Skins/wasabee-fix-wasabee-skin.meta.js
// @downloadURL   https://le-jeu.github.io/Wasabee-Skins/wasabee-fix-wasabee-skin.user.js
// @match         https://intel.ingress.com/*
// @grant         none
// ==/UserScript==

var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };

info.buildName = 'wasabee-skin';
info.dateTimeVersion = '2022-10-22T18:51:09.616Z';
info.pluginId = 'wasabee-fix-wasabee-skin';
function wrapper(plugin_info) {

// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

var setup;
function define(fun) { setup = fun; }
define((function(){"use strict";const e={static:{CSS:{fix:".wasabee-dialog div.container,.wasabee-dialog div.content{grid-gap:.3em .6em}.wasabee-dialog select{background:#0005;border-radius:5px;color:inherit;padding:1px 5px}",jqueryResizable:".ui-dialog-content{max-height:calc(100vh - 86px)!important}\n\n/*! jQuery UI - v1.13.0 - 2021-10-07\n* http://jqueryui.com\n* Includes: core.css, accordion.css, autocomplete.css, menu.css, button.css, controlgroup.css, checkboxradio.css, datepicker.css, dialog.css, draggable.css, resizable.css, progressbar.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css\n* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Arial%2CHelvetica%2Csans-serif&fsDefault=1em&fwDefault=normal&cornerRadius=3px&bgColorHeader=e9e9e9&bgTextureHeader=flat&borderColorHeader=dddddd&fcHeader=333333&iconColorHeader=444444&bgColorContent=ffffff&bgTextureContent=flat&borderColorContent=dddddd&fcContent=333333&iconColorContent=444444&bgColorDefault=f6f6f6&bgTextureDefault=flat&borderColorDefault=c5c5c5&fcDefault=454545&iconColorDefault=777777&bgColorHover=ededed&bgTextureHover=flat&borderColorHover=cccccc&fcHover=2b2b2b&iconColorHover=555555&bgColorActive=007fff&bgTextureActive=flat&borderColorActive=003eff&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=fffa90&bgTextureHighlight=flat&borderColorHighlight=dad55e&fcHighlight=777620&iconColorHighlight=777620&bgColorError=fddfdf&bgTextureError=flat&borderColorError=f1a899&fcError=5f3f3f&iconColorError=cc0000&bgColorOverlay=aaaaaa&bgTextureOverlay=flat&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=666666&bgTextureShadow=flat&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=5px&offsetTopShadow=0px&offsetLeftShadow=0px&cornerRadiusShadow=8px\n* Copyright jQuery Foundation and other contributors; Licensed MIT */.ui-dialog .ui-resizable-n{height:2px;top:0}.ui-dialog .ui-resizable-e{right:0;width:2px}.ui-dialog .ui-resizable-s{bottom:0;height:2px}.ui-dialog .ui-resizable-w{left:0;width:2px}.ui-dialog .ui-resizable-ne,.ui-dialog .ui-resizable-nw,.ui-dialog .ui-resizable-se,.ui-dialog .ui-resizable-sw{height:7px;width:7px}.ui-dialog .ui-resizable-se{bottom:0;right:0}.ui-dialog .ui-resizable-sw{bottom:0;left:0}.ui-dialog .ui-resizable-ne{right:0;top:0}.ui-dialog .ui-resizable-nw{left:0;top:0}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-draggable-handle{-ms-touch-action:none;touch-action:none}.ui-resizable{position:relative}.ui-resizable-handle{display:block;font-size:.1px;position:absolute;-ms-touch-action:none;touch-action:none}.ui-resizable-autohide .ui-resizable-handle,.ui-resizable-disabled .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;left:0;top:-5px;width:100%}.ui-resizable-s{bottom:-5px;cursor:s-resize;height:7px;left:0;width:100%}.ui-resizable-e{cursor:e-resize;height:100%;right:-5px;top:0;width:7px}.ui-resizable-w{cursor:w-resize;height:100%;left:-5px;top:0;width:7px}.ui-resizable-se{bottom:1px;cursor:se-resize;height:12px;right:1px;width:12px}.ui-resizable-sw{bottom:-5px;cursor:sw-resize;height:9px;left:-5px;width:9px}.ui-resizable-nw{cursor:nw-resize;height:9px;left:-5px;top:-5px;width:9px}.ui-resizable-ne{cursor:ne-resize;height:9px;right:-5px;top:-5px;width:9px}"}}};window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={}),window.plugin.wasabeeSkins["Early fix"]=e}));
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
  script.appendChild(document.createTextNode('//# sourceURL=iitc:///plugins/wasabee-fix-wasabee-skin.js'));
  (document.body || document.head || document.documentElement).appendChild(script);
} else {
  // mobile string
  wrapper(info);
}
