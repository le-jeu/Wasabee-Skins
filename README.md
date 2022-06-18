# Wasabee Skins

## Dependencies
You need to install nodes/npm and download/clone this repository

    npm install

## Configuration

Copy one of the existant skin in `src/` into another folder.

Edit the following files:

 - `src/skinId/meta.json`: only the name and url need to be changed, and maybe the version
 - `src/skinId/static.js`: to specify the css to load, custom strings, layer colors...
 - `src/skinId/css/`: prefer adding css inside this folder
 - `src/skinId/images/`: place to put images you use inside CSS
 - `src/skinId/strings/`: place to put language packs for the skin

Edit the file `rollup.config.js` to specify your skin IDs :
```js
let pluginsId = [ "my_skin_id", "my-second-skin-id" ];
```

## Build
    npm run build

## Install

The skin is in `release/prod/SKIN-wasabee-skin.user.js`.

