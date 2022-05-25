const del = require("del");
const path = require("path");
const blocksPaths = require("./webpack/blocks");

const blocks = [
  ...new Set(
    [...blocksPaths(__dirname)].map(block => {
      const blockStructure = block.split(path.sep);
      return path.join(blockStructure[2]);
    })
  )
];

blocks.forEach(block => {
  del(`build/resources/blocks/${block}/assets`);
});
