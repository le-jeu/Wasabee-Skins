# Wasabee Skins

## Dependencies
You need to install nodes/npm and download/clone this repository

    npm install

## Configuration

Copy one of the existant skin in `src/` into another folder.

Edit the following files:

 - `src/pluginId/meta.json`: only the name and url need to be changed, and maybe the version
 - `src/pluginId/static.js`: to specify the css to load, custom strings, layer colors...
 - `src/pluginId/css/`: prefer adding css inside this folder
 - `src/pluginId/images/`: place to put images you use inside CSS
 - `src/pluginId/strings/`: place to put language packs for the skin

Edit the file `rollup.config.js`

## Build
    npm run build

## Install

The skin is in `release/prod/SKIN-wasabee-skin.user.js`.

