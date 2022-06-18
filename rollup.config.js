import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import inlineSvg from "rollup-plugin-inline-svg";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import cssnano from "cssnano";

import path from "path";

import iitcplugin from "./rollup-plugin-iitcplugin";

const buildPath = "dist";
const pluginsPath = "src";

/* List of plugin to build */
let pluginsId = [
  "blackgame",
  "blank",
  "draw-tools-anchors",
  "monospace",
  "thegame-svg",
  "wasabee-fix",
];

export default pluginsId.map((p) => {
  const meta = require("./" + path.join(pluginsPath, p, "meta.json"));
  return {
    input: path.join(pluginsPath, p),
    external: ["unsafeWindow"],
    output: {
      format: "amd",
      file: path.join(buildPath, p + "-wasabee-skin.user.js"),
    },
    plugins: [
      json(),
      inlineSvg(),
      resolve(),
      postcss({
        inject: false,
        plugins: [
          cssnano({
            preset: "default",
          }),
          url({
            url: "inline",
          }),
        ],
      }),

      replace({
        preventAssignment: true,
        values: {
          __SKIN_NAME__: JSON.stringify(meta.name),
        },
      }),

      terser(),

      iitcplugin({
        id: p + "-wasabee-skin",
        meta: require("./" + path.join(pluginsPath, p, "meta.json")),
        buildName: "wasabee-skin",
        namePrefix: "Wasabee Skin: ",
        /* You may change those properties to match your setup */
        downloadRoot: "https://le-jeu.github.io/Wasabee-Skins/",
        updateMeta: true,
      }),
    ],
  };
});
