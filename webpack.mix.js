/**
 * Laravel Mix
 *
 * An elegant wrapper around Webpack for the 80% use case.
 *
 * @see https://laravel.com/docs/8.x/mix
 * @author PH
 */
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

/**
 * Create additional Laravel Mix functions.
 */
mix.inWatch = () => process.argv.includes('--watch');
mix.inBuild = () => !process.argv.includes('--watch') && !mix.inProduction();

/**
 * Change Webpack configuration.
 *
 * @see https://webpack.js.org/configuration/
 */
mix.webpackConfig({
  devtool: mix.inProduction() ? 'none' : 'inline-source-map',
  output: {
    jsonpFunction: `${namespace}WebpackJsonpCallback`
  }
});

/**
 * Change Laravel Mix options.
 *
 * @see https://laravel-mix.com/docs/5.0/options
 * @see https://laravel-mix.com/docs/5.0/os-notifications
 */
mix.setPublicPath('dist');
mix.disableNotifications();
mix.options({
  processCssUrls: false
});

if (!mix.inProduction()) {
  mix.sourceMaps(false, 'inline-source-map');
}

/**
 * Change BrowserSync configuration.
 *
 * @see https://laravel-mix.com/docs/5.0/browsersync
 */
mix.browserSync({
  proxy: config.devUrl,
  files: config.watch,
  open: config.open
});

/**
 * Autoload some dependencies for each module.
 *
 * @see https://laravel-mix.com/docs/5.0/autoloading
 */
mix.autoload({
  jquery: ['$', 'window.jQuery']
});

/**
 * Manage tasks based on the environment.
 *
 * @author PH
 */
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

/**
 * Load all the dependencies included in manifest file.
 *
 * @author PH
 */
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

// /**
//  * Watch for images changes in all "blocks" folders.
//  *
//  * @author PH
//  */
//  const blocksFolders = [
//   ...new Set([...blocks(__dirname)].map(block => path.parse(block).dir))
// ];
// blocksFolders.forEach(block => {
//   const blockStructure = block.split(path.sep);
//   const blockPath = path.join(
//     blockStructure[0],
//     blockStructure[1],
//     blockStructure[2]
//   );

//   const blockName = block.split(path.sep)[2];
//   if (mix.inBuild() || mix.inProduction()) {
//     mix.copy(
//       path.join(blockPath, "assets/images", "**", "*"),
//       path.join("dist", "blocks", blockName, "images")
//     );
//     mix.copy(
//       path.join(blockPath, "assets/svg", "**", "*"),
//       path.join("dist", "blocks", blockName, "svg")
//     );
//   }
//   if (mix.inWatch()) {
//     mix.copyWatched(
//       path.join(blockPath, "assets/images", "**", "*"),
//       path.join("dist", "blocks", blockName, "images")
//     );
//     mix.copyWatched(
//       path.join(blockPath, "assets/svg", "**", "*"),
//       path.join("dist", "blocks", blockName, "svg")
//     );
//   }
// });

/**
 * Create manifest.js file.
 *
 * @see https://laravel-mix.com/docs/5.0/extract
 */
mix.extract();
