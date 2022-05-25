const desire = require('./webpack/desire');
const dependencies = require('./webpack/dependencies');
const blocks = require("./webpack/blocks");
const mix = require('laravel-mix');
const path = require('path');
const merge = require('webpack-merge');
const namespace = require('./package.json').namespace;
const config = merge(
  desire(`${__dirname}/resources/config`),
  desire(`${__dirname}/resources/config-local`)
);
const resources = path.join(__dirname, 'resources');

require('laravel-mix-copy-watched');

mix.inWatch = () => process.argv.includes('--watch');
mix.inBuild = () => !process.argv.includes('--watch') && !mix.inProduction();

mix.webpackConfig({
  devtool: mix.inProduction() ? 'none' : 'inline-source-map',
  output: {
    jsonpFunction: `${namespace}WebpackJsonpCallback`
  }
});

mix.setPublicPath('dist');
mix.disableNotifications();
mix.options({
  processCssUrls: false
});

if (!mix.inProduction()) {
  mix.sourceMaps(false, 'inline-source-map');
}

mix.browserSync({
  proxy: config.devUrl,
  files: config.watch,
  open: config.open
});

mix.autoload({
  jquery: ['$', 'window.jQuery']
});

if (mix.inProduction()) {
  mix.version();
  mix.copy(`${resources}/assets/fonts/**/*`, 'dist/fonts');
  mix.copy(`${resources}/assets/images/**/*`, 'dist/images');
} else if (mix.inBuild()) {
  mix.copy(`${resources}/assets/fonts/**/*`, 'dist/fonts');
  mix.copy(`${resources}/assets/images/**/*`, 'dist/images');
} else if (mix.inWatch()) {
  mix.copyWatched(`${resources}/assets/images/**/*`, 'dist/images');
}

blocks(__dirname).forEach(block => {
  const ext = path.parse(block).ext;
  const filename = path.parse(block).name;
  const dir = path.parse(block).dir;
  const blockName = dir.split(path.sep)[3];

  switch (ext) {
    case '.js':
    case '.jsx':
      mix.js(block, `dist/blocks/${blockName}/${filename}.js`);

      if (mix.inProduction()) {
        mix.babel(`dist/blocks/${blockName}/${filename}.js`, `dist/blocks/${blockName}/${filename}.js`);
      }
      break;

    case '.scss':
      mix.sass(block, `dist/blocks/${blockName}/${filename}.css`);
      break;
  }
});

dependencies(config).forEach(dependency => {
  const ext = path.parse(dependency).ext;
  const filename = path.parse(dependency).name;
  const dir = path.parse(dependency).dir;

  switch (ext) {
    case '.js':
    case '.jsx':
      mix.js(`${resources}/assets/${dependency}`, `${dir}/${filename}.js`);

      if (mix.inProduction()) {
        mix.babel(`dist/${dir}/${filename}.js`, `dist/${dir}/${filename}.js`);
      }
      break;

    case '.scss':
      mix.sass(`${resources}/assets/${dependency}`, `${dir}/${filename}.css`);
      break;
  }
});

const blocksFolders = [
  ...new Set([...blocks(__dirname)].map(block => path.parse(block).dir))
];
blocksFolders.forEach(block => {
  const blockStructure = block.split(path.sep);
  const blockPath = path.join(
    blockStructure[0],
    blockStructure[1],
    blockStructure[2]
  );

  const blockName = block.split(path.sep)[2];
  if (mix.inBuild() || mix.inProduction()) {
    mix.copy(
      path.join(blockPath, "assets/images", "**", "*"),
      path.join("dist", "blocks", blockName, "images")
    );
    mix.copy(
      path.join(blockPath, "assets/svg", "**", "*"),
      path.join("dist", "blocks", blockName, "svg")
    );
  }
  if (mix.inWatch()) {
    mix.copyWatched(
      path.join(blockPath, "assets/images", "**", "*"),
      path.join("dist", "blocks", blockName, "images")
    );
    mix.copyWatched(
      path.join(blockPath, "assets/svg", "**", "*"),
      path.join("dist", "blocks", blockName, "svg")
    );
  }
});

mix.extract();
