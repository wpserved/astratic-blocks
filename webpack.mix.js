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

const mix = require('laravel-mix');
const path = require('path');
const merge = require('webpack-merge');
const namespace = require('./package.json').namespace;
const config = merge(desire(`${__dirname}/resources/config`), desire(`${__dirname}/resources/config-local`));
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
      if (mix.inProduction()) {
        mix.js(`${resources}/assets/${dependency}`, `${dir}/${filename}.js`).babel(`dist/${dir}/${filename}.js`, `dist/${dir}/${filename}.js`);
      } else {
        mix.js(`${resources}/assets/${dependency}`, `${dir}/${filename}.js`);
      }
      break;
    case '.scss':
      mix.sass(`${resources}/assets/${dependency}`, `${dir}/${filename}.css`);
      break;
  }
});

/**
 * Create manifest.js file.
 *
 * @see https://laravel-mix.com/docs/5.0/extract
 */
mix.extract();
